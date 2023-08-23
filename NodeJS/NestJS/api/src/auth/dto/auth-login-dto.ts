import { IsEmail, IsStrongPassword } from 'class-validator';

export class AuthLoginDTO {
  @IsEmail()
  email: string;
  @IsStrongPassword()
  password: string;
}
