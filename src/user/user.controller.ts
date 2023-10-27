import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOperation({ summary: 'Создания пользователя' })
  @ApiCreatedResponse({ description: 'Успешная регистрация' })
  @ApiBadRequestResponse({ description: 'Ошибка валидации' })
  @Post()
  create(@Body() dto: UserDto) {
    try {
      return this.userService.create(dto);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
