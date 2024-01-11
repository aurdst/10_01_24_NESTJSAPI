import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { FormulaOneService } from './formula-one.service';
import { FormulaOne } from './formula-one.model';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('formula-one')
@ApiTags('Formula One')
export class FormulaOneController {
  constructor(private readonly formulaOneService: FormulaOneService) {}

  @Get()
  async getAllFormulaOnes(): Promise<FormulaOne[]> {
    return this.formulaOneService.getAllFormulaOnes();
  }

  @Get(':id')
  async getFormulaOneById(@Param('id') id: string): Promise<FormulaOne> {
    return this.formulaOneService.getFormulaOneById(id);
  }

  @Post()
  async createFormulaOne(@Body() formulaOne: FormulaOne): Promise<FormulaOne> {
    return this.formulaOneService.createFormulaOne(formulaOne);
  }

  @Put(':id')
  async updateFormulaOne(@Param('id') id: string, @Body() updatedFormulaOne: FormulaOne): Promise<FormulaOne> {
    return this.formulaOneService.updateFormulaOne(id, updatedFormulaOne);
  }

  @Delete(':id')
  async deleteFormulaOne(@Param('id') id: string): Promise<void> {
    return this.formulaOneService.deleteFormulaOne(id);
  }
}
