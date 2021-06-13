import {Entity, hasMany, model, property} from '@loopback/repository';
import {Carro} from './carro.model';
import {Favorito} from './favorito.model';

@model()
export class Listadepreferencia extends Entity {
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
  modelo?: string;

  @property({
    type: 'number',
  })
  clienteId?: number;

  @hasMany(() => Carro, {through: {model: () => Favorito}})
  carros: Carro[];

  constructor(data?: Partial<Listadepreferencia>) {
    super(data);
  }
}

export interface ListadepreferenciaRelations {
  // describe navigational properties here
}

export type ListadepreferenciaWithRelations = Listadepreferencia & ListadepreferenciaRelations;
