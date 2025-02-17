import { Provider } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

export const RABBITMQ_SERVICE = 'RABBITMQ_SERVICE';

export const rabbitMQProvider: Provider = {
  provide: RABBITMQ_SERVICE,
  useFactory: (): ClientProxy => {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://admin:admin@localhost:5672'],
        queue: 'order_queue',
        queueOptions: { durable: false },
      },
    });
  },
};