import { Controller, Get, Query, Post, Param, Put, UseFilters, Body, Delete } from '@nestjs/common';
import { IdeaService } from './idea.service';
import { IdeaDto } from './idea.dto';

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
  getIdea(@Body() body: IdeaDto) {
    return this.ideaService.create(body);
  }

  @Put(':id')
  updateIdea(@Param('id') id: string, @Body() body: IdeaDto) {
    return this.ideaService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ideaService.remove(id);
  }

}
