import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {CreateUserDto} from "../users/dto/create-user.dto";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";
import {User} from "../users/users.model";

@Injectable()
export class AuthService {
  constructor(private userService: UsersService, private jwtService: JwtService) {
  }

  async login(userDto: CreateUserDto): Promise<{ token: string }> {
    return this.generateToken(await this.validateUser(userDto));
  }

  async register(userDto: CreateUserDto) {
    if (await this.userService.getUserByEmail(userDto.email)) {
      throw new HttpException('User with this email already exist', HttpStatus.BAD_REQUEST);
    }

    const hashedPassword = await bcrypt.hash(userDto.password, 5);
    const user = await this.userService.createUser({...userDto, password: hashedPassword});

    return await this.generateToken(user);
  }

  private async generateToken(user: User): Promise<{ token: string }> {
    const payload = {id: user.id, email: user.email, role: user.role_id};
    return {token: await this.jwtService.sign(payload)};
  }

  private async validateUser(userDto: CreateUserDto): Promise<User> {
    const user = await this.userService.getUserByEmail(userDto.email);
    const password = await bcrypt.compare(userDto.password, user.password);

    if (!user && !password) {
      throw new UnauthorizedException({message: 'Invalid email or password'});
    }

    return user;
  }
}
