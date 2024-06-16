import { gql } from '@apollo/client';

export const GET_SHOES = gql`
  query GetShoes {
    getShoes {
      collection {
        amount
        brandName
        category
        color
        createdAt
        model
        price
        size
      }
      metadata {
        currentPage
        limitValue
        totalCount
        totalPages
      }
    }
  }
`;
