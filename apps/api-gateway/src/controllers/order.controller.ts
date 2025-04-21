import { Body, Controller, Post } from '@nestjs/common';
import { OrderService } from '../services/order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async createOrder(@Body() createOrderDto: any) {
    return await this.orderService.createOrder(createOrderDto);
  }
}
