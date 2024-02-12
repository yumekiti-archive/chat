import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  OneToMany,
  ManyToOne,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Message } from '../../messages/entities/message.entity';

@Entity()
@ObjectType()
export class Room {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'ID' })
  id: number;

  @Column()
  @Field(() => String, { description: 'ルーム名' })
  name: string;

  @ManyToOne(() => User, (user) => user.ownedRooms)
  @Field(() => User, { description: 'オーナー' })
  owner: User;

  @OneToMany(() => User, (user) => user.rooms)
  @Field(() => [User], { description: '参加者' })
  participants: User[];

  @OneToMany(() => Message, (message) => message.room)
  @Field(() => [Message], { description: 'メッセージ', nullable: true })
  messages: Message[];

  @CreateDateColumn()
  @Field(() => Date, { description: '作成日時' })
  created_at: Date;

  @UpdateDateColumn()
  @Field(() => Date, { description: '更新日時' })
  updated_at: Date;
}
