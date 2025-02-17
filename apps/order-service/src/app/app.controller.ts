import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('order_created')
  handleUserCreated(@Payload() data: any) {
    console.log('📩 Received event: order_created', data);
  }
}
