import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
// import { grpcClientOptions } from './grpc.option';
// import { ClientsModule } from '@nestjs/microservices';

@Module({
  imports: [
    /* ClientsModule.register([
      {
        name: 'HERO_PACKAGE',
        ...grpcClientOptions,
      },
    ]), */
  ],
  controllers: [ClientController],
  providers: [],
})
export class HeroClientModule {}
