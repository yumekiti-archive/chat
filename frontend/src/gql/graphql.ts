/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type CreateMessageInput = {
  /** メッセージの内容 */
  content: Scalars['String']['input'];
  /** 画像のURL */
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  /** ルームのID */
  roomId: Scalars['Int']['input'];
  /** 送信者のID */
  senderId: Scalars['Int']['input'];
};

export type CreateRoomInput = {
  /** ルーム名 */
  name: Scalars['String']['input'];
  /** 作成者のID */
  ownerId: Scalars['Int']['input'];
  /** 参加者のID */
  participantsId?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type CreateUserInput = {
  /** メールアドレス */
  email: Scalars['String']['input'];
  /** 名前 */
  name: Scalars['String']['input'];
  /** パスワード */
  password: Scalars['String']['input'];
};

export type Message = {
  __typename?: 'Message';
  /** メッセージの内容 */
  content: Scalars['String']['output'];
  /** 作成日時 */
  created_at: Scalars['DateTime']['output'];
  /** ID */
  id: Scalars['Int']['output'];
  /** 画像のURL */
  images: Array<Scalars['String']['output']>;
  /** ルーム */
  room: Room;
  /** ユーザー */
  sender: User;
  /** 更新日時 */
  updated_at: Scalars['DateTime']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createMessage: Message;
  createRoom: Room;
  createUser: User;
  removeMessage: Message;
  removeRoom: Room;
  removeUser: User;
  updateMessage: Message;
  updateRoom: Room;
  updateUser: User;
};


export type MutationCreateMessageArgs = {
  createMessageInput: CreateMessageInput;
};


export type MutationCreateRoomArgs = {
  createRoomInput: CreateRoomInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationRemoveMessageArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveRoomArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateMessageArgs = {
  updateMessageInput: UpdateMessageInput;
};


export type MutationUpdateRoomArgs = {
  updateRoomInput: UpdateRoomInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  message: Message;
  messages: Array<Message>;
  room: Room;
  rooms: Array<Room>;
  user: User;
  users: Array<User>;
};


export type QueryMessageArgs = {
  id: Scalars['Int']['input'];
};


export type QueryRoomArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};

export type Room = {
  __typename?: 'Room';
  /** 作成日時 */
  created_at: Scalars['DateTime']['output'];
  /** ID */
  id: Scalars['Int']['output'];
  /** メッセージ */
  messages?: Maybe<Array<Message>>;
  /** ルーム名 */
  name: Scalars['String']['output'];
  /** オーナー */
  owner: User;
  /** 参加者 */
  participants: Array<User>;
  /** 更新日時 */
  updated_at: Scalars['DateTime']['output'];
};

export type UpdateMessageInput = {
  /** メッセージの内容 */
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  /** 画像のURL */
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  /** ルームのID */
  roomId?: InputMaybe<Scalars['Int']['input']>;
  /** 送信者のID */
  senderId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateRoomInput = {
  id: Scalars['Int']['input'];
  /** ルーム名 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 作成者のID */
  ownerId?: InputMaybe<Scalars['Int']['input']>;
  /** 参加者のID */
  participantsId?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type UpdateUserInput = {
  /** メールアドレス */
  email?: InputMaybe<Scalars['String']['input']>;
  /** アイコン */
  icon: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  /** 名前 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** パスワード */
  password?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  /** 作成日時 */
  created_at: Scalars['DateTime']['output'];
  /** メールアドレス */
  email: Scalars['String']['output'];
  /** アイコン */
  icon?: Maybe<Scalars['String']['output']>;
  /** ID */
  id: Scalars['Int']['output'];
  /** メッセージ */
  messages?: Maybe<Array<Message>>;
  /** 名前 */
  name: Scalars['String']['output'];
  /** 所有しているルーム */
  ownedRooms?: Maybe<Array<Room>>;
  /** パスワード */
  password: Scalars['String']['output'];
  /** 参加しているルーム */
  rooms?: Maybe<Array<Room>>;
  /** 更新日時 */
  updated_at: Scalars['DateTime']['output'];
};

export type CreateMessageMutationVariables = Exact<{
  images?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  content: Scalars['String']['input'];
  senderId: Scalars['Int']['input'];
  roomId: Scalars['Int']['input'];
}>;


export type CreateMessageMutation = { __typename?: 'Mutation', createMessage: { __typename?: 'Message', content: string } };

export type CreateRoomMutationVariables = Exact<{
  name: Scalars['String']['input'];
  ownerId: Scalars['Int']['input'];
  participants: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
}>;


export type CreateRoomMutation = { __typename?: 'Mutation', createRoom: { __typename?: 'Room', id: number, name: string, created_at: any, updated_at: any } };

export type CreateUserMutationVariables = Exact<{
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: number, icon?: string | null, name: string, email: string, password: string, created_at: any, updated_at: any } };

export type GetMessagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMessagesQuery = { __typename?: 'Query', messages: Array<{ __typename?: 'Message', id: number, images: Array<string>, content: string, created_at: any }> };

export type GetRoomsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRoomsQuery = { __typename?: 'Query', rooms: Array<{ __typename?: 'Room', id: number, name: string, created_at: any }> };

export type GetUserQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: number, icon?: string | null, name: string, email: string, password: string, created_at: any, updated_at: any } };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: number, icon?: string | null, name: string, email: string, password: string, created_at: any, updated_at: any }> };


export const CreateMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"images"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"senderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roomId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createMessageInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"images"},"value":{"kind":"Variable","name":{"kind":"Name","value":"images"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"senderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"senderId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"roomId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roomId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<CreateMessageMutation, CreateMessageMutationVariables>;
export const CreateRoomDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRoom"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ownerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"participants"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRoom"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createRoomInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"ownerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ownerId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"participantsId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"participants"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<CreateRoomMutation, CreateRoomMutationVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createUserInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const GetMessagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMessages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]} as unknown as DocumentNode<GetMessagesQuery, GetMessagesQueryVariables>;
export const GetRoomsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRooms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rooms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]} as unknown as DocumentNode<GetRoomsQuery, GetRoomsQueryVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type CreateMessageInput = {
  /** メッセージの内容 */
  content: Scalars['String']['input'];
  /** 画像のURL */
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  /** ルームのID */
  roomId: Scalars['Int']['input'];
  /** 送信者のID */
  senderId: Scalars['Int']['input'];
};

export type CreateRoomInput = {
  /** ルーム名 */
  name: Scalars['String']['input'];
  /** 作成者のID */
  ownerId: Scalars['Int']['input'];
  /** 参加者のID */
  participantsId?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type CreateUserInput = {
  /** メールアドレス */
  email: Scalars['String']['input'];
  /** 名前 */
  name: Scalars['String']['input'];
  /** パスワード */
  password: Scalars['String']['input'];
};

export type Message = {
  __typename?: 'Message';
  /** メッセージの内容 */
  content: Scalars['String']['output'];
  /** 作成日時 */
  created_at: Scalars['DateTime']['output'];
  /** ID */
  id: Scalars['Int']['output'];
  /** 画像のURL */
  images: Array<Scalars['String']['output']>;
  /** ルーム */
  room: Room;
  /** ユーザー */
  sender: User;
  /** 更新日時 */
  updated_at: Scalars['DateTime']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createMessage: Message;
  createRoom: Room;
  createUser: User;
  removeMessage: Message;
  removeRoom: Room;
  removeUser: User;
  updateMessage: Message;
  updateRoom: Room;
  updateUser: User;
};


export type MutationCreateMessageArgs = {
  createMessageInput: CreateMessageInput;
};


export type MutationCreateRoomArgs = {
  createRoomInput: CreateRoomInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationRemoveMessageArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveRoomArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateMessageArgs = {
  updateMessageInput: UpdateMessageInput;
};


export type MutationUpdateRoomArgs = {
  updateRoomInput: UpdateRoomInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  message: Message;
  messages: Array<Message>;
  room: Room;
  rooms: Array<Room>;
  user: User;
  users: Array<User>;
};


export type QueryMessageArgs = {
  id: Scalars['Int']['input'];
};


export type QueryRoomArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};

export type Room = {
  __typename?: 'Room';
  /** 作成日時 */
  created_at: Scalars['DateTime']['output'];
  /** ID */
  id: Scalars['Int']['output'];
  /** メッセージ */
  messages?: Maybe<Array<Message>>;
  /** ルーム名 */
  name: Scalars['String']['output'];
  /** オーナー */
  owner: User;
  /** 参加者 */
  participants: Array<User>;
  /** 更新日時 */
  updated_at: Scalars['DateTime']['output'];
};

export type UpdateMessageInput = {
  /** メッセージの内容 */
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  /** 画像のURL */
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  /** ルームのID */
  roomId?: InputMaybe<Scalars['Int']['input']>;
  /** 送信者のID */
  senderId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateRoomInput = {
  id: Scalars['Int']['input'];
  /** ルーム名 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 作成者のID */
  ownerId?: InputMaybe<Scalars['Int']['input']>;
  /** 参加者のID */
  participantsId?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type UpdateUserInput = {
  /** メールアドレス */
  email?: InputMaybe<Scalars['String']['input']>;
  /** アイコン */
  icon: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  /** 名前 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** パスワード */
  password?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  /** 作成日時 */
  created_at: Scalars['DateTime']['output'];
  /** メールアドレス */
  email: Scalars['String']['output'];
  /** アイコン */
  icon?: Maybe<Scalars['String']['output']>;
  /** ID */
  id: Scalars['Int']['output'];
  /** メッセージ */
  messages?: Maybe<Array<Message>>;
  /** 名前 */
  name: Scalars['String']['output'];
  /** 所有しているルーム */
  ownedRooms?: Maybe<Array<Room>>;
  /** パスワード */
  password: Scalars['String']['output'];
  /** 参加しているルーム */
  rooms?: Maybe<Array<Room>>;
  /** 更新日時 */
  updated_at: Scalars['DateTime']['output'];
};
