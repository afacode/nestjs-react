import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeEntity } from '../entities/employee.entity';
import { JwtPayloadInterface } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  user: EmployeeEntity;
  constructor(
    @InjectRepository(EmployeeEntity)
    private readonly employeeRepository: Repository<EmployeeEntity>) {}

  async validateUser(name: string) {
    return this.employeeRepository.findOne({name});
  }

  /**
   * 生成token
   * @param username string
   * @param password string
   */
  async createToken(username: string, password: string): Promise<any> {
    const user: JwtPayloadInterface = {username, password};
    return jwt.sign(user, 'secretKey', { expiresIn: 3600 });
  }

  // 根据用户名查找用户
  async findEmployeeByName(name: string) {
    return this.employeeRepository.findOne({ name });
  }

  getUser(): EmployeeEntity {
    return this.user;
  }

  async login(name: string, password: string): Promise<any> {
    const user = await this.employeeRepository.findOne({ name });
    if (user !== undefined && user.password === password) {
        return this.createToken(user.name, user.password);
    } else {
        return 'login failed !';
    }
  }
}
