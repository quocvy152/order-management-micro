import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OrderController } from '../controllers/order.controller';
import { rabbitMQProviders } from '../providers/rabbitmq.providers';
import { OrderService } from '../services/order.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, OrderController],
  providers: [AppService, OrderService, ...rabbitMQProviders],
})
export class AppModule {}
