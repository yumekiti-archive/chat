import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'アイコン' })
  icon: string;

  @Field(() => String, { description: '名前' })
  name: string;

  @Field(() => String, { description: 'メールアドレス' })
  email: string;

  @Field(() => String, { description: 'パスワード' })
  password: string;
}
