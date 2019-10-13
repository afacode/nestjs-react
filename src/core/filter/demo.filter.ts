import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from '@nestjs/common';

@Catch(HttpException)
export class DemoFilter<T> implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const req = ctx.getRequest();
    const res = ctx.getResponse();
    const status = exception.getStatus();

    const errorResponse = {
      code: status,
      timestamp: new Date().toLocaleDateString(),
      ip: req.ip,
      path: req.url,
      method: req.method,
      message: exception.message.error || exception.message || null,
    };

    if (status >= 500) {
      Logger.error(`${req.ip} ${req.method} ${req.url}`, JSON.stringify(errorResponse), 'ExceptionFilter');
    } else if (status >= 400) {
      Logger.warn(`${req.ip} ${req.method} ${req.url}`, JSON.stringify(errorResponse));
    } else {
      Logger.log(`${req.ip} ${req.method} ${req.url}`, JSON.stringify(errorResponse));
    }

    res.status(status).json(errorResponse);
  }
}
