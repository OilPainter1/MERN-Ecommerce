import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      password
  }
}
`;

export const QUERY_ALL_PRODUCTS = gql`
query products($searchTerm: String) {
  products(searchTerm: $searchTerm) {
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
