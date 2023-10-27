import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(dto: UserDto) {
    const findUser = await this.prisma.user.findFirst({
      where: { name: dto.name },
    });

    if (findUser) {
      throw new Error('User already exists');
    }

    return await this.prisma.user.create({ data: { ...dto } });
  }
}
