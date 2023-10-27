import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Admin authorization' })
  @Post('/login')
  async login(@Body() dto: LoginDto) {
    try {
      return this.authService.login(dto);
    } catch (error) {
      return console.log(error);
    }
  }
}
