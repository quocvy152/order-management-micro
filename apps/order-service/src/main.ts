import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://admin:admin@localhost:5672'],
      queue: 'order_queue',
      queueOptions: { durable: true },
    },
  });

  await app.listen();
  console.log('🚀 Order Service is listening to RabbitMQ...');
}

bootstrap();
