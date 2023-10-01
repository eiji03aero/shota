import { Test, TestingModule } from '@nestjs/testing';
import { ThreadSummaryForumsController } from './thread-summary-forums.controller';

describe('ThreadSummaryForumsController', () => {
  let controller: ThreadSummaryForumsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThreadSummaryForumsController],
    }).compile();

    controller = module.get<ThreadSummaryForumsController>(
      ThreadSummaryForumsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
