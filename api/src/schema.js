const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }

  type Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: String!
    img: String
  }
  # this is input type
  input petInput {
    name: String
    type: String!
  }

  type Query {
    user: User
    pets: [Pet]!
    pet(input: petInput): Pet
  }

  input createPetInput {
    name: String!
    type: String!
  }

  type Mutation {
    createPet(input: createPetInput!): Pet!
  }
`

module.exports = typeDefs
