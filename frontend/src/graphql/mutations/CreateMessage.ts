import { gql } from "@apollo/client";

export const CREATE_MESSAGE = gql`
  mutation CreateMessage(
    $images: [String!]
    $content: String!
    $senderId: Int!
    $roomId: Int!
  ) {
    createMessage(
      createMessageInput: {
        images: $images
        content: $content
        senderId: $senderId
        roomId: $roomId
      }
    ) {
      content
    }
  }
`;
