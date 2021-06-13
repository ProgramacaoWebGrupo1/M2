import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Marca} from './marca.model';

@model()
export class Carro extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  categoria?: string;

  @property({
    type: 'string',
  })
  nome_marca?: string;

  @property({
    type: 'string',
  })
  modelo?: string;

  @property({
    type: 'number',
  })
  preco?: number;

  @property({
    type: 'number',
  })
  potencia?: number;

  @property({
    type: 'string',
  })
  cor?: string;

  @property({
    type: 'number',
  })
  ano?: number;

  @belongsTo(() => Marca)
  marcaId: number;

  constructor(data?: Partial<Carro>) {
    super(data);
  }
}

export interface CarroRelations {
  // describe navigational properties here
}

export type CarroWithRelations = Carro & CarroRelations;
