/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation CreateMessage($images: [String!], $content: String!, $senderId: Int!, $roomId: Int!) {\n    createMessage(createMessageInput: {\n      images: $images\n      content: $content\n      senderId: $senderId\n      roomId: $roomId\n    }) {\n      content\n    }\n  }\n": types.CreateMessageDocument,
    "\n  mutation CreateRoom($name: String!, $ownerId: Int!, $participants: [Int!]!) {\n    createRoom(createRoomInput: {\n      name: $name\n      ownerId: $ownerId\n      participantsId: $participants\n    }) {\n      id\n      name\n      created_at\n      updated_at\n    }\n  }\n": types.CreateRoomDocument,
    "\n  mutation CreateUser($name: String!, $email: String!, $password: String!) {\n    createUser(createUserInput: {\n      name: $name\n      email: $email\n      password: $password\n    }) {\n      id\n      icon\n      name\n      email\n      password\n      created_at\n      updated_at\n    }\n  }\n": types.CreateUserDocument,
    "\n  query GetMessages {\n    messages {\n      id\n      images\n      content\n      created_at\n    }\n  }\n": types.GetMessagesDocument,
    "\n  query GetRooms {\n    rooms {\n      id\n      name\n      created_at\n    }\n  }\n": types.GetRoomsDocument,
    "\n  query GetUser($id: Int!) {\n    user(id: 1) {\n      id\n      icon\n      name\n      email\n      password\n      created_at\n      updated_at\n    }\n  }\n": types.GetUserDocument,
    "\n  query GetUsers {\n    users {\n      id\n      icon\n      name\n      email\n      password\n      created_at\n      updated_at\n    }\n  }\n": types.GetUsersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateMessage($images: [String!], $content: String!, $senderId: Int!, $roomId: Int!) {\n    createMessage(createMessageInput: {\n      images: $images\n      content: $content\n      senderId: $senderId\n      roomId: $roomId\n    }) {\n      content\n    }\n  }\n"): (typeof documents)["\n  mutation CreateMessage($images: [String!], $content: String!, $senderId: Int!, $roomId: Int!) {\n    createMessage(createMessageInput: {\n      images: $images\n      content: $content\n      senderId: $senderId\n      roomId: $roomId\n    }) {\n      content\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateRoom($name: String!, $ownerId: Int!, $participants: [Int!]!) {\n    createRoom(createRoomInput: {\n      name: $name\n      ownerId: $ownerId\n      participantsId: $participants\n    }) {\n      id\n      name\n      created_at\n      updated_at\n    }\n  }\n"): (typeof documents)["\n  mutation CreateRoom($name: String!, $ownerId: Int!, $participants: [Int!]!) {\n    createRoom(createRoomInput: {\n      name: $name\n      ownerId: $ownerId\n      participantsId: $participants\n    }) {\n      id\n      name\n      created_at\n      updated_at\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUser($name: String!, $email: String!, $password: String!) {\n    createUser(createUserInput: {\n      name: $name\n      email: $email\n      password: $password\n    }) {\n      id\n      icon\n      name\n      email\n      password\n      created_at\n      updated_at\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUser($name: String!, $email: String!, $password: String!) {\n    createUser(createUserInput: {\n      name: $name\n      email: $email\n      password: $password\n    }) {\n      id\n      icon\n      name\n      email\n      password\n      created_at\n      updated_at\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetMessages {\n    messages {\n      id\n      images\n      content\n      created_at\n    }\n  }\n"): (typeof documents)["\n  query GetMessages {\n    messages {\n      id\n      images\n      content\n      created_at\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetRooms {\n    rooms {\n      id\n      name\n      created_at\n    }\n  }\n"): (typeof documents)["\n  query GetRooms {\n    rooms {\n      id\n      name\n      created_at\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUser($id: Int!) {\n    user(id: 1) {\n      id\n      icon\n      name\n      email\n      password\n      created_at\n      updated_at\n    }\n  }\n"): (typeof documents)["\n  query GetUser($id: Int!) {\n    user(id: 1) {\n      id\n      icon\n      name\n      email\n      password\n      created_at\n      updated_at\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUsers {\n    users {\n      id\n      icon\n      name\n      email\n      password\n      created_at\n      updated_at\n    }\n  }\n"): (typeof documents)["\n  query GetUsers {\n    users {\n      id\n      icon\n      name\n      email\n      password\n      created_at\n      updated_at\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;