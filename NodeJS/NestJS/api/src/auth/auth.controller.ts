import { Body, Controller, Post } from '@nestjs/common';
import { AuthLoginDTO } from './dto/auth-login-dto';
import { AuthRegisterDTO } from './dto/auth-register-dto';
import { AuthForgotPasswordDTO } from './dto/auth-forgot-password-dto';
import { AuthResetPasswordDTO } from './dto/auth-reset-password-dto copy';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}
  @Post('login')
  async login(@Body() authLoginDTO: AuthLoginDTO) {
    return this.authService.login(authLoginDTO.email, authLoginDTO.password);
  }

  @Post('register')
  async register(@Body() authRegisterDTO: AuthRegisterDTO) {
    return this.authService.register(authRegisterDTO);
  }

  @Post('forgot-password')
  async forgotPassword(@Body() authForgotPasswordDTO: AuthForgotPasswordDTO) {
    return this.authService.forgotPassword(authForgotPasswordDTO.email);
  }

  @Post('reset-password')
  async resetPassword(@Body() authResetPasswordDTO: AuthResetPasswordDTO) {
    return this.authService.resetPassword(
      authResetPasswordDTO.password,
      authResetPasswordDTO.token,
    );
  }
}
