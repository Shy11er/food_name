import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(dto: LoginDto) {
    const findAdmin = await this.prisma.admin.findFirst({
      where: { email: dto.email },
    });

    if (!findAdmin) {
      throw new HttpException('Admin not found', 404);
    }

    if (!(await bcrypt.compare(dto.password, findAdmin.password))) {
      // const token = await this.generat
      throw new UnauthorizedException('Invalid password or login');
    }
    const payload = { email: dto.email, id: findAdmin.id };
    // return { access_token: await this.jwtService.signAsync(payload) };
  }
}
