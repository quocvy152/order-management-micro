import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('user_created')
  handleUserCreated(@Payload() data: any) {
    console.log('📩 Received event: user_created', data);
  }
}
