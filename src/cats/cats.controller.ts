import { Post, Body, Controller } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
@Controller()
export class Cats {
  @Post('cat')
  async create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto);
    return 'This action adds a new cat';
  }
}
