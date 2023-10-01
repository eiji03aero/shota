import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DBOptions } from './data-source';

import { GochanController } from './controllers/gochan/gochan.controller';
import { ThreadSummariesController } from './controllers/thread-summaries/thread-summaries.controller';
import { ThreadSummaryForumsController } from './controllers/thread-summary-forums/thread-summary-forums.controller';

@Module({
  imports: [HttpModule, TypeOrmModule.forRoot(DBOptions)],
  controllers: [
    AppController,
    GochanController,
    ThreadSummariesController,
    ThreadSummaryForumsController,
  ],
  providers: [AppService],
})
export class AppModule {}
