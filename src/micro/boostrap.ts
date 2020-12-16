import { MicroAppModule } from './micro.module';
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
async function microBootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MicroAppModule,
    {
      transport: Transport.TCP,
    },
  );
  app.listen(() => console.log('Microservice is listening'));
}

microBootstrap();
