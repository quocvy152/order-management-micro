import { Provider } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { QUEUES } from '../utilities/constants/queue';

const RABBITMQ_URL = process.env.RABBITMQ_URL;

export const ORDER_SERVICE = 'ORDER_SERVICE';
export const PAYMENT_SERVICE = 'PAYMENT_SERVICE';

export const rabbitMQProviders: Provider[] = [
    {
        provide: ORDER_SERVICE,
        useFactory: (): ClientProxy => {
            return ClientProxyFactory.create({
                transport: Transport.RMQ,
                options: {
                    urls: [RABBITMQ_URL],
                    queue: QUEUES.ORDER_QUEUE,
                    queueOptions: { durable: true },
                },
            });
        },
    },

    {
        provide: PAYMENT_SERVICE,
        useFactory: (): ClientProxy => {
            return ClientProxyFactory.create({
                transport: Transport.RMQ,
                options: {
                    urls: [RABBITMQ_URL],
                    queue: QUEUES.PAYMENT_QUEUE,
                    queueOptions: { durable: true },
                },
            });
        },
    },
];