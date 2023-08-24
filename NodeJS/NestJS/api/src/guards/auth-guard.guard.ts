import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UserService } from 'src/user/user.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}
  async canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    const { auth } = req.headers;
    try {
      const data = this.authService.checkToken((auth ?? '').split(' ')[1]);
      req.tokenPayload = data;
      req.user = await this.userService.readOne(data.id);
      return true;
    } catch (e) {
      return false;
    }
  }
}
