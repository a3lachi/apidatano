import { Module } from '@nestjs/common';
import { AppController , UserController , DataController  } from './app.controller';
import { AppService } from './app.service';




@Module({
  imports: [],
  controllers: [AppController , UserController , DataController],
  providers: [AppService],
})
export class AppModule {}
