import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('RABBITMQ_SERVICE') private readonly client: ClientProxy) {}

  sendUserCreatedEvent(user: any) {
    this.client.emit('user_created', user);
  }
}
