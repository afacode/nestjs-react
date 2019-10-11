import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IdeaEntity } from './idea.entity';
import { IdeaDto } from './idea.dto';

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

  async create(body: IdeaDto) {
    const idea = this.ideaRepository.create(body);
    await this.ideaRepository.save(idea);
    return idea;
  }

  async update(id: string, body: IdeaDto) {
    const ideaSingle = await this.ideaRepository.findOne({where: {id}});
    await this.ideaRepository.save(body);
    return ideaSingle;
  }

  async remove(id: string) {
    const ideaRemove =  await this.ideaRepository.findOne({where: {id}});
    await this.ideaRepository.remove(ideaRemove);
  }
}
