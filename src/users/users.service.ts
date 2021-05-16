import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./users.model";
import {CreateUserDto} from "./dto/create-user.dto";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {
  }

  async createUser(dto: CreateUserDto): Promise<User> {
    return await this.userRepository.create(dto);
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.findAll({include: {all: true}});
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findOne(
      {
        where: {email},
        include: {all: true}
      }
    );
  }
}
