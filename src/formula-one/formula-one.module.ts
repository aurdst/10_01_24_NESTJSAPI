import { Module } from '@nestjs/common';
import { FormulaOneController } from './formula-one.controller';
import { FormulaOneService } from './formula-one.service';

@Module({
  controllers: [FormulaOneController],
  providers: [FormulaOneService]
})

export class FormulaOneModule {}
