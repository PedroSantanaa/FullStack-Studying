import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { filter } from 'rxjs';
import { ROLES_KEY } from 'src/decorators/roles.decorator';
import { Role } from 'src/enums/roles.enum';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(context: ExecutionContext) {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();

    const rolesFiltered = requiredRoles.some(
      (role: number) => role <= user.role,
    );

    return rolesFiltered;
  }
}
