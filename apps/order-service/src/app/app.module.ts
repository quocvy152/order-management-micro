import { Module } from '@nestjs/common';
import { rabbitMQProvider } from '../provider/rabbitmq.provider';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, rabbitMQProvider],
})
export class AppModule {}
