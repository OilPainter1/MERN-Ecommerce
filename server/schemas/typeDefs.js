const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        username: String!
        email: String!
        password: String!
    }

    type Auth {
        token: ID!
        user: User
    }
    
    type Product {
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
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveProduct(input: SaveProductInput): User
        removeProduct(productId: ID!): User
    }
`;

module.exports = typeDefs;