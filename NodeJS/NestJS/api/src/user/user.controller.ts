import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { ReplaceUserDTO } from './dto/replace-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { UserService } from './user.service';
import { LogInterceptor } from 'src/interceptors/log.interceptor';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @UseInterceptors(LogInterceptor)
  @Post()
  async create(@Body() body: CreateUserDTO) {
    return this.userService.create(body);
  }

  @Get()
  async readAll() {
    return this.userService.readAll();
  }

  @Get(':id')
  async readOne(@Param('id', ParseIntPipe) id) {
    return this.userService.readOne(id);
  }

  @Put(':id')
  async replace(@Param('id', ParseIntPipe) id, @Body() body: ReplaceUserDTO) {
    return this.userService.replace(id, body);
  }
  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id, @Body() body: UpdateUserDTO) {
    return this.userService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
