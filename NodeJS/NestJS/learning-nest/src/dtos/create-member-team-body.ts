import { IsNotEmpty } from 'class-validator';

export class CreateTeamMemberBody {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  function: string;
}
