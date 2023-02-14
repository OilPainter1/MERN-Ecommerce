const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        _is: ID!
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
`;

module.exports = typeDefs;