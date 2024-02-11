import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ManyToOne, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Room } from '../../rooms/entities/room.entity';

@Entity()
@ObjectType()
export class Message {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'ID' })
  id: number;

  @Column('simple-array', { nullable: true })
  @Field(() => [String], { description: '画像のURL' })
  images: string[];

  @Column()
  @Field(() => String, { description: 'メッセージの内容' })
  content: string;

  @ManyToOne(() => User, user => user.messages)
  @Field(() => User, { description: 'ユーザー' })
  sender: User;

  @ManyToOne(() => Room, room => room.messages)
  @Field(() => Room, { description: 'ルーム' })
  room: Room;

  @CreateDateColumn()
  @Field(() => Date, { description: '作成日時' })
  created_at: Date;

  @UpdateDateColumn()
  @Field(() => Date, { description: '更新日時' })
  updated_at: Date;
}
