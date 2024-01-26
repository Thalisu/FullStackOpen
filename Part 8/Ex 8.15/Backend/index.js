const { ApolloServer } = require("@apollo/server");
const { GraphQLError } = require("graphql");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { v1: uuid } = require("uuid");
const config = require("./utils/config");
const mongoose = require("mongoose");
const Author = require("./models/author");
const Book = require("./models/book");

mongoose.set("strictQuery", false);
console.log("connecting to", config.MONGODB_URI);
mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connection to MongoDB:", error.message);
  });

const typeDefs = `
  type Author {
    name: String!
    born: Int
    bookCount: Int!
    id: ID!
  }

  type Book {
    title: String!
    published: Int!
    author: Author!
    genres: [String!]!
    id: ID!
  }

  type Query {
    bookCount: Int!
    authorCount: Int!
    allBooks(author: String, genre: String): [Book!]!
    allAuthors: [Author!]!
  }

  type Mutation {
    addBook(
      title: String!
      author: String!
      published: Int!
      genres: [String!]!
    ): Book
    editAuthor(
      name: String!
      setBornTo: Int!
    ): Author
  }
`;

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
  },

  Author: {
    bookCount: async (parent) =>
      Book.find({ author: parent.id }).countDocuments(),
  },

  Mutation: {
    addBook: async (root, args) => {
      let author = await Author.findOne({ name: args.author });

      if (!author) {
        try {
          author = new Author({ name: args.author });
          args.author = await author.save();
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
        return await book.save();
      } catch (err) {
        throw new GraphQLError(err, {
          extensions: {
            code: "BAD_USER_INPUT",
            invalidArgs: err.errors.title.value,
          },
        });
      }
    },

    editAuthor: async (root, args) => {
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
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
