import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('idea')
export class IdeaEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 50,
  })
  idea: string;

  @Column('text')
  description: string;

  @Column()
  view: number;

  @Column()
  isPublished: boolean;
}
