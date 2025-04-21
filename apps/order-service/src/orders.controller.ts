import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { OrderEntity } from './entity/order.entity';
import { OrdersService } from './orders.service';

@Controller()
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @MessagePattern('order.created')
  async createOrder(@Payload() data: OrderEntity) {
    console.log("🚀 ~ OrdersController ~ createOrder ~ data:", data)
    await this.ordersService.createOrder(data);
  }
}
