import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject('CATS_SERVICE') private client: ClientProxy) {}

  async getHello(name: string) {
    const resp = await firstValueFrom(
      this.client.emit<string, string>('hello', `Hola ${name}`),
    );

    return resp;
  }
}
