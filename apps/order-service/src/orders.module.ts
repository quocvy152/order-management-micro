
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { OrderEntity } from './entity/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity])],
  providers: [OrdersService],
  controllers: [OrdersController],
})

export class OrdersModule {}