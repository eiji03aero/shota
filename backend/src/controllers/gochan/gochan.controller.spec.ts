import { Test, TestingModule } from '@nestjs/testing';
import { GochanController } from './gochan.controller';

describe('GochanController', () => {
  let controller: GochanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GochanController],
    }).compile();

    controller = module.get<GochanController>(GochanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
