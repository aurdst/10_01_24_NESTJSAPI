import { Injectable, NotFoundException } from '@nestjs/common';
import { FormulaOne } from './formula-one.model';

@Injectable()
export class FormulaOneService {
  private formulaOnes: FormulaOne[] = [];

  async getAllFormulaOnes(): Promise<FormulaOne[]> {
    try {
      return Promise.resolve(this.formulaOnes);
    } catch (error) {
      throw new NotFoundException('Unable to retrieve Formula Ones.');
    }
  }

  async getFormulaOneById(id: string): Promise<FormulaOne> {
    try {
      const formulaOne = this.formulaOnes.find((f) => f.id === id);
      if (!formulaOne) {
        throw new NotFoundException(`Formula One with ID ${id} not found.`);
      }
      return Promise.resolve(formulaOne);
    } catch (error) {
      throw new NotFoundException(`Unable to retrieve Formula One with ID ${id}.`);
    }
  }

  async createFormulaOne(formulaOne: { name: string; team: string; engine: string }): Promise<FormulaOne> {
    try {
      const newFormulaOne: FormulaOne = { ...formulaOne, id: Date.now().toString(), wins: 0 };
      this.formulaOnes.push(newFormulaOne);
      return Promise.resolve(newFormulaOne);
    } catch (error) {
      throw new NotFoundException('Unable to create Formula One.');
    }
  }
  
  

  async updateFormulaOne(id: string, updatedFormulaOne: FormulaOne): Promise<FormulaOne> {
    try {
      const index = this.formulaOnes.findIndex((f) => f.id === id);
      if (index === -1) {
        throw new NotFoundException(`Formula One with ID ${id} not found.`);
      }
      this.formulaOnes[index] = { ...updatedFormulaOne, id };
      return Promise.resolve(this.formulaOnes[index]);
    } catch (error) {
      throw new NotFoundException(`Unable to update Formula One with ID ${id}.`);
    }
  }

  async deleteFormulaOne(id: string): Promise<void> {
    try {
      const index = this.formulaOnes.findIndex((f) => f.id === id);
      if (index === -1) {
        throw new NotFoundException(`Formula One with ID ${id} not found.`);
      }
      this.formulaOnes.splice(index, 1);
      return Promise.resolve();
    } catch (error) {
      throw new NotFoundException(`Unable to delete Formula One with ID ${id}.`);
    }
  }
}
