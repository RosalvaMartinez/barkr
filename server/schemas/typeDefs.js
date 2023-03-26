const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    savedDogs: [Dog]
  }
  type Dog {
    dogId: ID!
    name: String
    breed: String
    birthday: String
    age: String
    gender: String
  }
  type Query {
    me: User
  }
 
 type Auth {
 token: ID!
 user: User
 }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;