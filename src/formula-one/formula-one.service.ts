import { Injectable, NotFoundException } from '@nestjs/common';
import { FormulaOne } from './formula-one.model';

@Injectable()
export class FormulaOneService {
  private formulaOnes: FormulaOne[] = [];

  getAllFormulaOnes(): Promise<FormulaOne[]> {
    return Promise.resolve(this.formulaOnes);
  }

  getFormulaOneById(id: string): Promise<FormulaOne> {
    const formulaOne = this.formulaOnes.find((f) => f.id === id);
    if (!formulaOne) {
      throw new NotFoundException(`Formule 1 avec l'identifiant ${id} introuvable.`);
    }
    return Promise.resolve(formulaOne);
  }

  createFormulaOne(formulaOne: FormulaOne): Promise<FormulaOne> {
    const newFormulaOne: FormulaOne = { ...formulaOne, id: Date.now().toString() };
    this.formulaOnes.push(newFormulaOne);
    return Promise.resolve(newFormulaOne);
  }

  updateFormulaOne(id: string, updatedFormulaOne: FormulaOne): Promise<FormulaOne> {
    const index = this.formulaOnes.findIndex((f) => f.id === id);
    if (index === -1) {
      throw new NotFoundException(`Formule 1 avec l'identifiant ${id} introuvable.`);
    }
    this.formulaOnes[index] = { ...updatedFormulaOne, id };
    return Promise.resolve(this.formulaOnes[index]);
  }

  deleteFormulaOne(id: string): Promise<void> {
    const index = this.formulaOnes.findIndex((f) => f.id === id);
    if (index === -1) {
      throw new NotFoundException(`Formule 1 avec l'identifiant ${id} introuvable.`);
    }
    this.formulaOnes.splice(index, 1);
    return Promise.resolve();
  }
}
