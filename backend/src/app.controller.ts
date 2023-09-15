import { Controller, Get } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { AppService } from './app.service';

import { ThreadSummary } from './entities/ThreadSummary';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly dataSource: DataSource,
  ) {}

  @Get()
  async getHello() {
    const threadSummary = new ThreadSummary();
    threadSummary.title = 'Hoge title';

    const threadSummaryRepository =
      this.dataSource.getRepository(ThreadSummary);

    await threadSummaryRepository.save(threadSummary);
    console.log('Photo has been saved');

    const threadSummaries = await threadSummaryRepository.find();
    console.log('All thread summaries from the db: ', threadSummaries);

    return this.appService.getHello();
  }
}
