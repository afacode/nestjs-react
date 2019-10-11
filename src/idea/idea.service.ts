import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IdeaEntity } from './idea.entity';

@Injectable()
export class IdeaService {
  constructor(
    @InjectRepository(IdeaEntity)
    private readonly ideaRepository: Repository<IdeaEntity>) {}

  async getAll() {
    return await this.ideaRepository.find();
  }

  async getSingle(id: string) {
    return await this.ideaRepository.findOne({where: {id}});
  }

  async create(query) {
    const idea = this.ideaRepository.create(query);
    await this.ideaRepository.save(idea);
    return idea;
  }
}
