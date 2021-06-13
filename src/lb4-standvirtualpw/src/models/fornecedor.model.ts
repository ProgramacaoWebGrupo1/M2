import {Entity, model, property} from '@loopback/repository';

@model()
export class Fornecedor extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  nomefornecedor?: string;

  @property({
    type: 'number',
  })
  stock?: number;


  constructor(data?: Partial<Fornecedor>) {
    super(data);
  }
}

export interface FornecedorRelations {
  // describe navigational properties here
}

export type FornecedorWithRelations = Fornecedor & FornecedorRelations;
