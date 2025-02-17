import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://admin:admin@localhost:5672'],
      queue: 'user_queue',
      queueOptions: { durable: false },
    },
  });

  await app.listen();
  console.log('🚀 User Service is listening to RabbitMQ...');
}

bootstrap();
