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
        description
        model
        price
        image
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
