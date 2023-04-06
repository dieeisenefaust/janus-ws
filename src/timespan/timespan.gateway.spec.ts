import { Test, TestingModule } from '@nestjs/testing';
import { TimespanGateway } from './timespan.gateway';
import { TimespanService } from './timespan.service';

describe('TimespanGateway', () => {
  let gateway: TimespanGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimespanGateway, TimespanService],
    }).compile();

    gateway = module.get<TimespanGateway>(TimespanGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
