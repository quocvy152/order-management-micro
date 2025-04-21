import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderEntity } from './entity/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrderEntity)
    private ordersRepository: Repository<OrderEntity>,
  ) {}

  async createOrder(@Body() data: OrderEntity) {
    console.log("🚀 ~ OrdersService ~ createOrder ~ data:", data)
    // return await this.ordersRepository.create(data);
  }
}
