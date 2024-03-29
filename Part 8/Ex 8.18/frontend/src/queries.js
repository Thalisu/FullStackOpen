import { gql } from "@apollo/client";

export const ALL_BOOKS = gql`
  query AllBooks {
    allBooks {
      title
      author {
        name
      }
      published
    }
  }
`;
export const ALL_AUTHORS = gql`
  query AllAuthors {
    allAuthors {
      name
      born
      bookCount
    }
  }
`;

export const CREATE_BOOK = gql`
  mutation Mutation(
    $title: String!
    $author: String!
    $published: Int!
    $genres: [String!]!
  ) {
    addBook(
      title: $title
      author: $author
      published: $published
      genres: $genres
    ) {
      published
      title
    }
  }
`;

export const EDIT_AUTHOR = gql`
  mutation Mutation($name: String!, $setBornTo: Int!) {
    editAuthor(name: $name, setBornTo: $setBornTo) {
      name
      born
    }
  }
`;

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      value
    }
  }
`;
