import { Module } from '@nestjs/common';
import { rabbitMQProvider } from '../provider/rabbitmq.provider';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { OrdersModule } from '../orders.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'Anh0205@@',
      database: 'order-service',
      entities: [],
      synchronize: true,
    }),
    OrdersModule
  ],
  controllers: [AppController],
  providers: [AppService, rabbitMQProvider],
})
export class AppModule {}
