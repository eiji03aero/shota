import { Test, TestingModule } from '@nestjs/testing';
import { ThreadSummariesController } from './thread-summaries.controller';

describe('ThreadSummariesController', () => {
  let controller: ThreadSummariesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThreadSummariesController],
    }).compile();

    controller = module.get<ThreadSummariesController>(ThreadSummariesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
