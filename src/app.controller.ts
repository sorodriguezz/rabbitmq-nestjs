import { Controller, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('cat/:name')
  getCatName(@Param('name') name: string) {
    return this.appService.getHello(name);
  }
}
