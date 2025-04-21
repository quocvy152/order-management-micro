
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { OrderStatus } from '../utilities/constants/order';

@Entity()
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  order_code: string;

  @ApiProperty({ enum: OrderStatus })
  order_status: string;
}
