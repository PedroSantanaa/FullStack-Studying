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
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { ReplaceUserDTO } from './dto/replace-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() body: CreateUserDTO) {
    return { body };
  }

  @Get()
  async readAll() {
    return { users: [] };
  }

  @Get(':id')
  async readOne(@Param('id', ParseIntPipe) id) {
    return { user: {}, id };
  }

  @Put(':id')
  async replace(@Param('id', ParseIntPipe) id, @Body() body: ReplaceUserDTO) {
    return { body, id };
  }
  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id, @Body() body: UpdateUserDTO) {
    return { body, id };
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return { id };
  }
}
