import { gql } from "@apollo/client";

export const GET_MESSAGES = gql`
  query GetMessages {
    messages {
      id
      images
      content
      created_at
    }
  }
`;
