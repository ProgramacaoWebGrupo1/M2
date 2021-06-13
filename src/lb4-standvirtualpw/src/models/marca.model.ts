import {Entity, model, property, hasMany} from '@loopback/repository';
import {Fornecedor} from './fornecedor.model';
import {Lista} from './lista.model';
import {Carro} from './carro.model';

@model()
export class Marca extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  marca?: string;

  @property({
    type: 'number',
  })
  quantidade?: number;

  @hasMany(() => Fornecedor, {through: {model: () => Lista}})
  fornecedors: Fornecedor[];

  @hasMany(() => Carro)
  carros: Carro[];

  constructor(data?: Partial<Marca>) {
    super(data);
  }
}

export interface MarcaRelations {
  // describe navigational properties here
}

export type MarcaWithRelations = Marca & MarcaRelations;
