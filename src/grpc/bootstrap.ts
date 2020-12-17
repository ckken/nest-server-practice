import { NestFactory } from '@nestjs/core';
import { GrpcModule } from './server/server.module';
import { HeroClientModule } from './client/client.module';
import { grpcClientOptions } from './proto/hero.option';
async function bootstrap() {
  const app = await NestFactory.create(GrpcModule);
  app.connectMicroservice(grpcClientOptions);
  await app.startAllMicroservicesAsync();
}
bootstrap();
// =======================================
async function httpBootstrap() {
  const app = await NestFactory.create(HeroClientModule);
  await app.listen(3003, '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
}
httpBootstrap();
