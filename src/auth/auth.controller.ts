import {Body, Controller, Post} from '@nestjs/common';
import {CreateUserDto} from "../users/dto/create-user.dto";
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @Post('login')
  login(@Body() userDto: CreateUserDto): Promise<{ username: string; token: string }> {
    return this.authService.login(userDto);
  }

  @Post('register')
  register(@Body() userDto: CreateUserDto): Promise<{ username: string; token: string }> {
    return this.authService.register(userDto);
  }
}
