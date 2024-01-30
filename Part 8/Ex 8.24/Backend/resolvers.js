const { GraphQLError } = require("graphql");
const Author = require("./models/author");
const Book = require("./models/book");
const jwt = require("jsonwebtoken");

const { PubSub } = require("graphql-subscriptions");
const pubsub = new PubSub();

const resolvers = {
  Query: {
    bookCount: async () => Book.collection.countDocuments(),

    authorCount: async () => Author.collection.countDocuments(),

    allBooks: async (parent, args) => {
      if (args.author) {
        const author = await Author.findOne({ name: args.author });
        return Book.find({ author: author.id }).populate("author");
      }
      if (args.genre) {
        return Book.find({ genres: { $in: [args.genre] } }).populate("author");
      }
      return Book.find({}).populate("author");
    },

    allAuthors: async () => Author.find({}),

    me: (root, args, context) => {
      return context.currentUser;
    },
  },

  Author: {
    bookCount: async (parent) =>
      Book.find({ author: parent.id }).countDocuments(),
  },

  Mutation: {
    addBook: async (root, args, { currentUser }) => {
      if (!currentUser) {
        throw new GraphQLError("not authenticated", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }
      let author = await Author.findOne({ name: args.author });

      if (!author) {
        try {
          author = new Author({ name: args.author });
          author = await author.save();
          args.author = author;
        } catch (err) {
          throw new GraphQLError(err, {
            extensions: {
              code: "BAD_USER_INPUT",
              invalidArgs: args.author,
            },
          });
        }
      }

      args.author = author.id;
      try {
        const book = new Book({ ...args });
        const { _doc } = await book.save();
        pubsub.publish("BOOK_ADDED", { bookAdded: { ..._doc, author } });
        return { ..._doc, author };
      } catch (err) {
        throw new GraphQLError(err, {
          extensions: {
            code: "BAD_USER_INPUT",
            invalidArgs: err.errors.title.value,
          },
        });
      }
    },

    editAuthor: async (root, args, { currentUser }) => {
      if (!currentUser) {
        throw new GraphQLError("not authenticated", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }
      const author = await Author.findOne({ name: args.name });
      author.born = args.setBornTo;
      try {
        return await author.save();
      } catch (err) {
        throw new GraphQLError(err, {
          extensions: {
            code: "BAD_USER_INPUT",
            invalidArgs: err.errors.title.value,
          },
        });
      }
    },

    createUser: async (root, args) => {
      const user = new User({ ...args });

      return user.save().catch((error) => {
        throw new GraphQLError("Creating the user failed", {
          extensions: {
            code: "BAD_USER_INPUT",
            invalidArgs: args.username,
            error,
          },
        });
      });
    },

    login: async (root, args) => {
      const user = await User.findOne({ username: args.username });

      if (!user || args.password !== "secret") {
        throw new GraphQLError("wrong credentials", {
          extensions: {
            code: "BAD_USER_INPUT",
          },
        });
      }

      const userForToken = {
        username: user.username,
        id: user._id,
      };

      return { value: jwt.sign(userForToken, config.JWT_SECRET) };
    },
  },

  Subscription: {
    bookAdded: {
      subscribe: () => pubsub.asyncIterator("BOOK_ADDED"),
    },
  },
};

module.exports = resolvers;
