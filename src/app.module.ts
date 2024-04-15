import { Module } from '@nestjs/common';
import { HomeController } from 'controllers/home.controller';
import { MessageService } from 'services/message.service';

@Module({
  imports: [],
  controllers: [HomeController],
  providers: [MessageService],
})
export class AppModule {}
