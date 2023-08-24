import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { ReplaceUserDTO } from './dto/replace-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { UserService } from './user.service';
import { LogInterceptor } from 'src/interceptors/log.interceptor';
import { ParamId } from 'src/decorators/param-id.decorator';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/enums/roles.enum';
import { RoleGuard } from 'src/guards/role-guard.guard';
import { AuthGuard } from 'src/guards/auth-guard.guard';

@UseGuards(AuthGuard, RoleGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @UseInterceptors(LogInterceptor)
  @Roles(Role.Admin)
  @Post()
  async create(@Body() body: CreateUserDTO) {
    return this.userService.create(body);
  }

  @Roles(Role.Admin)
  @Get()
  async readAll() {
    return this.userService.readAll();
  }

  @Roles(Role.Admin)
  @Get(':id')
  async readOne(@ParamId() id: number) {
    return this.userService.readOne(id);
  }

  @Roles(Role.Admin)
  @Put(':id')
  async replace(@ParamId() id: number, @Body() body: ReplaceUserDTO) {
    return this.userService.replace(id, body);
  }

  @Roles(Role.Admin)
  @Patch(':id')
  async update(@ParamId() id: number, @Body() body: UpdateUserDTO) {
    return this.userService.update(id, body);
  }

  @Roles(Role.Admin)
  @Delete(':id')
  async delete(@ParamId() id: number) {
    return this.userService.delete(id);
  }
}
