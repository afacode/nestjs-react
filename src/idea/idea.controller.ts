import { Controller, Get, Query, Post, Param, Put, UseFilters } from '@nestjs/common';
import { IdeaService } from './idea.service';

@Controller('idea')
export class IdeaController {
  constructor(private ideaService: IdeaService) {}

  @Get('all')
  getAllIdea() {
    return this.ideaService.getAll();
  }

  @Get(':id')
  getSingleIdea(@Param('id') id: string) {
    return this.ideaService.getSingle(id);
  }

  @Post()
  getIdea(@Query() query) {
    return this.ideaService.create(query);
  }

  @Put()
  updateIdea() {
    return 'update idea';
  }

}
