import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: '名前' })
  name: string;

  @Field(() => String, { description: 'メールアドレス' })
  email: string;

  @Field(() => String, { description: 'パスワード' })
  password: string;
}
