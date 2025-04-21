import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ORDER_SERVICE } from '../providers/rabbitmq.providers';

@Injectable()
export class OrderService {
  constructor(@Inject(ORDER_SERVICE) private readonly orderServiceClient: ClientProxy) {}

  async createOrder(orderData: any) {
    return this.orderServiceClient.emit('order.created', orderData);
  }
}
