import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { AdminController } from './admin/admin.controller';
import { AppService } from './app/app.service';

@Module({
  imports: [],
  controllers: [AppController, AdminController],
  providers: [AppService],
})
export class AppModule {}
