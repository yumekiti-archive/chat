import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRoomInput {
  @Field(() => String, { description: 'ルーム名' })
  name: string;

  @Field(() => Int, { description: '作成者のID' })
  ownerId: number;

  @Field(() => [Int], { description: '参加者のID', nullable: true })
  participantsId: number[];
}
