import { Controller, Get, Param, Query } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeEntity } from '../entities/employee.entity';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  index(): string {
    return 'employee 首页';
  }

  @Get('find/:name')
  async findOne(@Param('name') name): Promise<EmployeeEntity> {
    return this.employeeService.findOne(name);
  }

  @Get('create')
  async create(@Query() query) {
    return this.employeeService.create(query);
  }
}
