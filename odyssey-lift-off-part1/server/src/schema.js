const { gql } = require("apollo-server");

const typeDefs = gql`

  type Query {
    tracksForHome: [Track!]!
  }

  "A group of modules about a specific topic"
  type Track{
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  "Author type used for the Track type"
  type Author {
    id: ID!
    name: String!
    photo: String
  }





`;


module.exports = typeDefs;