import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeEntity } from '../entities/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(EmployeeEntity)
    private readonly employeeRepository: Repository<EmployeeEntity>,
  ) {}

  async create(query): Promise<string> {
    const employee = {
      name: query.name,
      age: 20,
      company: {
        name: '上海公司',
      },
    };
    return this.employeeRepository.save(employee)
      .then(res => {
        return 'create employee ...done';
      })
      .catch(err => {
          return err;
      });
  }

  async findOne(name: string) {
    return await this.employeeRepository.findOne({name});
  }
}
