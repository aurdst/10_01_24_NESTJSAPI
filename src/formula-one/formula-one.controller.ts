import { Controller, Get, Post, Put, Logger, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { FormulaOneService } from './formula-one.service';
import { FormulaOne } from './formula-one.model';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LoggerService } from '../logger.service';

@Controller('formula-one')
@ApiTags('Formula One')
export class FormulaOneController {
  constructor(private readonly formulaOneService: FormulaOneService) {}

  @Get()
  @ApiOperation({ summary: 'Get all Formula Ones' })
  async getAllFormulaOnes(): Promise<FormulaOne[]> {
    try {
      return await this.formulaOneService.getAllFormulaOnes();
    } catch (error) {
      throw new NotFoundException('Unable to retrieve Formula Ones.');
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get Formula One by ID' })
  async getFormulaOneById(@Param('id') id: string): Promise<FormulaOne> {
    try {
      return await this.formulaOneService.getFormulaOneById(id);
    } catch (error) {
      throw new NotFoundException(`Formula One with ID ${id} not found.`);
    }
  }

  @Post()
  @ApiOperation({ summary: 'Create Formula One' })
  async createFormulaOne(@Body() formulaOne: FormulaOne): Promise<FormulaOne> {
    try {
      return await this.formulaOneService.createFormulaOne(formulaOne);
    } catch (error) {
      throw new NotFoundException('Unable to create Formula One.');
    }
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update Formula One by ID' })
  async updateFormulaOne(@Param('id') id: string, @Body() updatedFormulaOne: FormulaOne): Promise<FormulaOne> {
    try {
      return await this.formulaOneService.updateFormulaOne(id, updatedFormulaOne);
    } catch (error) {
      throw new NotFoundException(`Formula One with ID ${id} not found or unable to update.`);
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Formula One by ID' })
  async deleteFormulaOne(@Param('id') id: string): Promise<void> {
    try {
      await this.formulaOneService.deleteFormulaOne(id);
    } catch (error) {
      throw new NotFoundException(`Formula One with ID ${id} not found or unable to delete.`);
    }
  }

  @Get('swagger')
  @ApiOperation({ summary: 'Swagger UI' })
  @ApiResponse({ status: 200, description: 'Swagger UI' })
  getSwaggerUi() {
    return { message: 'Swagger UI' };
  }
}

@Controller('logger')
export class ExampleController {
  constructor(private readonly logger: LoggerService) {}

  @Get()
  getData() {
    this.logger.log('This is a log message', 'ExampleController');
    return 'Data';
  }
}