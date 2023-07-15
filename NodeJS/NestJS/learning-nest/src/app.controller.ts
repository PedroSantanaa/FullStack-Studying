import { Body, Controller, Post } from '@nestjs/common';
import { CreateTeamMemberBody } from './dtos/create-member-team-body';
import { RocketMembersRepository } from './repositories/rocket-members-repository';

@Controller('app')
export class AppController {
  constructor(private rocketMembersRepository: RocketMembersRepository) {}
  @Post('hello')
  async createMember(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body;
    await this.rocketMembersRepository.create(name, memberFunction);
  }
}
