import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMessageInput {
  @Field(() => [String], { description: '画像のURL', nullable: true })
  images: string[];

  @Field(() => String, { description: 'メッセージの内容' })
  content: string;

  @Field(() => Int, { description: '送信者のID' })
  senderId: number;

  @Field(() => Int, { description: 'ルームのID' })
  roomId: number;
}
