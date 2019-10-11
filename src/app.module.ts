import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdeaModule } from './idea/idea.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { DemoMiddleware } from './core/middleware/demo.middleware';

@Module({
  imports: [TypeOrmModule.forRoot(), IdeaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(DemoMiddleware)
      .forRoutes('idea');
  }
}
