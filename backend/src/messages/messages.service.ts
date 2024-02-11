import { Injectable } from '@nestjs/common';
import { CreateMessageInput } from './dto/create-message.input';
import { UpdateMessageInput } from './dto/update-message.input';
import { Message } from './entities/message.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private messagesRepository: Repository<Message>,
  ) {}

  async create(createMessageInput: CreateMessageInput) {
    return await this.messagesRepository.save(createMessageInput);
  }

  async findAll() {
    return await this.messagesRepository.find();
  }

  async findOne(id: number) {
    return await this.messagesRepository.findOneBy({ id });
  }

  async update(id: number, updateMessageInput: UpdateMessageInput) {
    return await this.messagesRepository.findOneBy({ id }).then((message) => {
      if (!message) return;
      return this.messagesRepository.save({
        ...message,
        ...updateMessageInput,
      });
    });
  }

  async remove(id: number) {
    return await this.messagesRepository.findOneBy({ id }).then((message) => {
      if (!message) return;
      return this.messagesRepository.remove(message);
    });
  }
}
