const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        username: String!
        email: String!
        password: String!
    }
    
    type Product {
        name: String!
        image: String!
        brand: [String] 
        sizes: Num
        category: [String]
        style: String!
        color: String!
        price: Num
        description: String!
        quantityInStock: Num
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): ????
        addUser(username: String!, email: String!, password: String!): ????
        saveProduct(input: saveProductInput): User
        removeProduct(productId: ID!): User
    }
`;

module.exports = typeDefs;