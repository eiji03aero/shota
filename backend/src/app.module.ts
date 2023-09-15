import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DBOptions } from './data-source';

import { GochanController } from './controllers/gochan/gochan.controller';
import { ThreadSummariesController } from './controllers/thread-summaries/thread-summaries.controller';

@Module({
  imports: [HttpModule, TypeOrmModule.forRoot(DBOptions)],
  controllers: [AppController, GochanController, ThreadSummariesController],
  providers: [AppService],
})
export class AppModule {}
