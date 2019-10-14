import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

/**
 * 在方法执行之前/之后绑定额外的逻辑
 * 转换从函数返回的结果
 * 转换从函数抛出的异常
 * 扩展基本的函数行为
 * 完全覆盖一个函数取决于所选择的条件(例如缓存)
 */
@Injectable()
export class DemoInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle();
  }
}
