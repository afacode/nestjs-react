import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { EmployeeEntity } from './employee.entity';

@Entity('company')
export class CompanyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(type => EmployeeEntity, employee => employee.company)
  employees: EmployeeEntity[];
}
