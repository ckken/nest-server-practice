import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AdminController } from './admin/admin.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, AdminController],
  providers: [AppService],
})
export class AppModule {}
