import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation saveProduct($product:SaveProductInput) {
    saveProduct(input: $product) {
      _id
        name
        image
        brand 
        sizes
        category
        style
        color
        price
        description
        quantityInStock
    }
  }
`;

export const REMOVE_PRODUCT = gql`
mutation removeProduct($productId: String!) {
    removeProduct(productId: $productId) {
      _id
        name
        image
        brand 
        sizes
        category
        style
        color
        price
        description
        quantityInStock
    }
}`