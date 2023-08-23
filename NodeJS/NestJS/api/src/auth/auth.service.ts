import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async createToken() {
    //fdfd
  }
  async checkToken(token: string) {
    //ssdsds
  }
  async login(email: string, password: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
        password,
      },
    });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }
  async forgotPassword(email: string) {
    const user = this.prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (!user) {
      throw new Error('Email not found');
    }
    return true;
  }
  async resetPassword(password: string, token: string) {
    const id = 0;
    this.prisma.user.update({
      where: {
        id,
      },
      data: {
        password,
      },
    });
    return true;
  }
}
