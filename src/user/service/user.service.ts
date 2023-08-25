import { Injectable } from '@nestjs/common';
import User from '../model/user.model';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UserService {
  async createUser(createUserDto: CreateUserDto): Promise<any> {
    return User.create(createUserDto);
  }

  async updateUser(updateUserDto: UpdateUserDto): Promise<any> {
    return User.update(updateUserDto);
  }

  async deleteUser(id: any): Promise<any> {
    return User.delete(id);
  }

  async getUserById(id: any): Promise<any> {
    return User.get(id);
  }
}
