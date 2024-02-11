import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'ID' })
  id: number;

  @Column()
  @Field(() => String, { description: 'アイコン' })
  icon: string;

  @Column()
  @Field(() => String, { description: '名前' })
  name: string;

  @Column({ unique: true })
  @Field(() => String, { description: 'メールアドレス' })
  email: string;

  @Column()
  @Field(() => String, { description: 'パスワード' })
  password: string;

  @CreateDateColumn()
  @Field(() => Date, { description: '作成日時' })
  created_at: Date;

  @UpdateDateColumn()
  @Field(() => Date, { description: '更新日時' })
  updated_at: Date;
}