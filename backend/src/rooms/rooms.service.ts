import { Injectable } from '@nestjs/common';
import { CreateRoomInput } from './dto/create-room.input';
import { UpdateRoomInput } from './dto/update-room.input';
import { Room } from './entities/room.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room)
    private roomsRepository: Repository<Room>,
  ) {}

  async create(createRoomInput: CreateRoomInput) {
    return await this.roomsRepository.save(createRoomInput);
  }

  async findAll() {
    return await this.roomsRepository.find();
  }

  async findOne(id: number) {
    return await this.roomsRepository.findOneBy({ id });
  }

  async update(id: number, updateRoomInput: UpdateRoomInput) {
    return await this.roomsRepository.findOneBy({ id }).then((room) => {
      if (!room) return;
      return this.roomsRepository.save({
        ...room,
        ...updateRoomInput,
      });
    });
  }

  async remove(id: number) {
    return await this.roomsRepository.findOneBy({ id }).then((room) => {
      if (!room) return;
      return this.roomsRepository.remove(room);
    });
  }
}
