import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdeaModule } from './idea/idea.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemoMiddleware } from './core/middleware/demo.middleware';
import { EmployeeModule } from './employee/employee.module';
import { AuthModule } from './auth/auth.module';
import { FeatureModule } from './feature/feature.module';

@Module({
  imports: [TypeOrmModule.forRoot(), IdeaModule, EmployeeModule, AuthModule, FeatureModule],
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
