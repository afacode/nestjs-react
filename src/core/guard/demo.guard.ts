import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

/**
 * 守卫可以做权限认证，如果你没有权限可以拒绝你访问这个路由，默认返回403错误
 * Guards 和前端路由中的路由守卫一样，主要确定请求是否应该由路由处理程序处理。
 * 通过守卫可以知道将要执行的上下文信息，
 * 所以和 middleware 相比，守卫可以确切知道将要执行什么
 */
@Injectable()
export class DemoGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return true;
  }
}
