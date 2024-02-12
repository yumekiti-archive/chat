import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String!) {
    createUser(createUserInput: {
      name: $name
      email: $email
      password: $password
    }) {
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