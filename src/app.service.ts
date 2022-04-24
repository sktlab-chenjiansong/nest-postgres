import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users/entities/user.entity';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

