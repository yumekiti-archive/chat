import { gql } from "@apollo/client";

export const CREATE_ROOM = gql`
  mutation CreateRoom($name: String!, $ownerId: Int!, $participants: [Int!]!) {
    createRoom(
      createRoomInput: {
        name: $name
        ownerId: $ownerId
        participantsId: $participants
      }
    ) {
      id
      name
      created_at
      updated_at
    }
  }
`;
