import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ManyToOne, OneToMany, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Message } from '../../messages/entities/message.entity';
import { Room } from '../../rooms/entities/room.entity';

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

  @OneToMany(() => Message, message => message.sender)
  @Field(() => [Message], { description: 'メッセージ', nullable: true })
  messages: Message[];

  @ManyToOne(() => Room, room => room.participants)
  @Field(() => [Room], { description: 'ルーム', nullable: true })
  rooms: Room[];

  @OneToMany(() => Room, room => room.owner)
  @Field(() => [Room], { description: '作成したルーム', nullable: true })
  room: Room[];

  @CreateDateColumn()
  @Field(() => Date, { description: '作成日時' })
  created_at: Date;

  @UpdateDateColumn()
  @Field(() => Date, { description: '更新日時' })
  updated_at: Date;
}