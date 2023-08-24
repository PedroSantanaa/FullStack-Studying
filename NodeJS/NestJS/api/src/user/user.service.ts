import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ReplaceUserDTO } from './dto/replace-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async create({ email, name, password }: CreateUserDTO) {
    const hashPassword = await bcrypt.hash(password, 10);
    return this.prisma.user.create({
      data: {
        email,
        name,
        password: hashPassword,
      },
    });
  }

  async readAll() {
    return this.prisma.user.findMany();
  }

  async readOne(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async replace(id: number, data: ReplaceUserDTO) {
    await this.idExists(id);
    data.password = await bcrypt.hash(data.password, 10);
    return this.prisma.user.update({
      where: {
        id,
      },
      data,
    });
  }
  async update(id: number, data: UpdateUserDTO) {
    await this.idExists(id);
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }
    return this.prisma.user.update({
      where: {
        id,
      },
      data,
    });
  }
  async delete(id: number) {
    await this.idExists(id);
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
  async idExists(id: number) {
    if (!(await this.readOne(id))) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  }
}
