import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('board')
@ApiTags('Board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}
  @Get()
  getAllPosts() {
    return this.boardService.getAllPosts();
  }

  @Get(':id')
  getPost(@Param('id') id: number) {
    return this.boardService.getPost(Number(id));
  }

  @Post()
  createPost(@Body() data) {
    return this.boardService.createPost(data);
  }

  @Put(':id')
  updatePost(@Param('id') id: number, @Body() data) {
    return this.boardService.updatePost(Number(id), data);
  }

  @Delete(':id')
  deletePost(@Param('id') id: number) {
    return this.boardService.deletePost(Number(id));
  }
}
