import { Injectable, NestMiddleware, Logger } from '@nestjs/common';

@Injectable()
export class DemoMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    Logger.log('Hello middleware ~');
    next();
  }
}
