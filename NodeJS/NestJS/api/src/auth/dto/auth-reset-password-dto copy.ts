import { IsJWT, IsString, IsStrongPassword } from 'class-validator';

export class AuthResetPasswordDTO {
  @IsStrongPassword()
  password: string;

  @IsString()
  @IsJWT()
  token: string;
}
