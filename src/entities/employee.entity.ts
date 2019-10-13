import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable } from 'typeorm';
import { CompanyEntity } from './company.entity';

@Entity('employee')
export class EmployeeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  age: number;

  // 使用了cascade,可以用于级联删除级联保存操作。注意：级联删除和级联保存仅在save()时会生效，在insert()时无效
  @ManyToOne(type => CompanyEntity, company => company.employees, {cascade: true})
  @JoinTable()
  // 指定本表中的外键（JoinColumn只存在于多端，因为外键只会存在于多端）
  // @JoinColumn({name: 'name'})
  company: CompanyEntity;
}
