import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { Injectable,  } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.usersRepository.findOne(id);
  }

  async remove(id: number) {
    return await this.usersRepository.delete(id);
  }

  async create(createUserDto : CreateUserDto) {
    return await this.usersRepository.save(createUserDto);
  }

  async update(id: number, updateUserDto : UpdateUserDto) {
    return await this.usersRepository.update(id, updateUserDto);
  }

}