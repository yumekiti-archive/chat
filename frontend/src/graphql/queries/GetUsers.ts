import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      icon
      name
      email
      password
      created_at
      updated_at
    }
  }
`