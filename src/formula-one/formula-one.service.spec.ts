import { Test, TestingModule } from '@nestjs/testing';
import { FormulaOneService } from './formula-one.service';

describe('FormulaOneService', () => {
  let service: FormulaOneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormulaOneService],
    }).compile();

    service = module.get<FormulaOneService>(FormulaOneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
