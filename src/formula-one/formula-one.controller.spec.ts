import { Test, TestingModule } from '@nestjs/testing';
import { FormulaOneController } from './formula-one.controller';

describe('FormulaOneController', () => {
  let controller: FormulaOneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormulaOneController],
    }).compile();

    controller = module.get<FormulaOneController>(FormulaOneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
