import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const ParamUser = createParamDecorator(
  (filter: string, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    if (!request.user) throw new Error('User not found');
    if (filter) {
      return request.user[filter];
    }
    return request.user;
  },
);
