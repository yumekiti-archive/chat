import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUser($id: Int!) {
    user(id: 1) {
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