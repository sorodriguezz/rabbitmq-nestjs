import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('cats')
  getCatName(name: string): void {
    console.log(`Hola ${name}`);
  }
}
