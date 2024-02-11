import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'ID' })
  id: number;

  @Field(() => String, { description: 'アイコン' })
  icon: string;

  @Field(() => String, { description: '名前' })
  name: string;

  @Field(() => String, { description: 'メールアドレス' })
  email: string;

  @Field(() => String, { description: 'パスワード' })
  password: string;

  @Field(() => Date, { description: '作成日時' })
  created_at: Date;

  @Field(() => Date, { description: '更新日時' })
  updated_at: Date;
}