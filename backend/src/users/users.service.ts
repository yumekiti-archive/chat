import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    return await this.usersRepository.save(createUserInput);
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.usersRepository.findOneBy({ id });
  }

  async update(id: number, updateUserInput: UpdateUserInput): Promise<User> {
    return await this.usersRepository.findOneBy({ id }).then((user) => {
      if (!user) return;
      return this.usersRepository.save({
        ...user,
        ...updateUserInput,
      });
    });
  }

  async remove(id: number): Promise<User> {
    return await this.usersRepository.findOneBy({ id }).then((user) => {
      if (!user) return;
      return this.usersRepository.remove(user);
    });
  }
}
