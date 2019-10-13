import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeEntity } from '../entities/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeEntity])],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
