const { gql } = require("apollo-server-express");

const typeDefs = gql`

    type User {
        username: String!
        email: String!
        password: String!
        _id: ID!
    }


  type Auth {
    token: ID!
    user: User
  }

  type Product {
    _id: ID!
    name: String!
    image: String!
    brand: String!
    sizes: [Float]
    category: [String]
    style: String!
    color: [String]
    price: Float
    description: String!
    quantityInStock: Int
  }

  input SaveProductInput {
    name: String!
    image: String!
    brand: String!
    sizes: [Float]
    category: [String]
    style: String!
    color: [String]
    price: Float
    description: String!
    quantityInStock: Int
  }

  type Query {
    me: User
    user(username: String!): User
    products(searchTerm: String): [Product]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveProduct(input: SaveProductInput): Product
    removeProduct(productId: ID!): Product
    addToStock(productId: ID!, stock: Int!): Product
  }
`;

module.exports = typeDefs;
