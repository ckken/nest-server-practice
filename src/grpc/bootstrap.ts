import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './grpc.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice,<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
  });
  app.listen(() => console.log('GRPC is listening'));
}

bootstrap();
