import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { Role } from 'src/enums/roles.enum';

export class CreateUserDTO {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsStrongPassword({
    minLength: 6,
  })
  password: string;

  @IsOptional()
  @IsEnum(Role)
  role: number;
}
