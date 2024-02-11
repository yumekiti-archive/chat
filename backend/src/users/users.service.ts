import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  create(createUserInput: CreateUserInput): string {
    return 'This action adds a new user';
  }

  findAll(): User[] {
    // 仮のユーザーデータを返す
    return [
      {
        id: 1,
        icon: 'https://example.com/icon1.png',
        name: 'user1',
        email: 'user1@example.com',
        password: 'password1',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        icon: 'https://example.com/icon2.png',
        name: 'user2',
        email: 'user2@example.com',
        password: 'password2',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
  }

  findOne(id: number): string {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput): string {
    return `This action updates a #${id} user`;
  }

  remove(id: number): string {
    return `This action removes a #${id} user`;
  }
}

