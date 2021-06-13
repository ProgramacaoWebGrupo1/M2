import {Entity, model, property} from '@loopback/repository';

@model()
export class Lista extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  marcaId?: number;

  @property({
    type: 'number',
  })
  fornecedorId?: number;

  constructor(data?: Partial<Lista>) {
    super(data);
  }
}

export interface ListaRelations {
  // describe navigational properties here
}

export type ListaWithRelations = Lista & ListaRelations;
