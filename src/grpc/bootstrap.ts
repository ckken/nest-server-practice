import { NestFactory } from '@nestjs/core';
import { GrpcModule } from './server/server.module';
import { HeroClientModule } from './client/client.module';
import { grpcClientOptions } from './proto/hero.option';
import {
  NestFastifyApplication,
  FastifyAdapter,
} from '@nestjs/platform-fastify';
import FastyFavicon from 'fastify-favicon';
async function bootstrap() {
  const app = await NestFactory.create(GrpcModule);
  app.connectMicroservice(grpcClientOptions);
  await app.startAllMicroservicesAsync();
}
bootstrap();
// =======================================
async function httpBootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    HeroClientModule,
    new FastifyAdapter(),
    { cors: true },
  );
  app.register(FastyFavicon);
  await app.listen(3003, '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
}
httpBootstrap();
