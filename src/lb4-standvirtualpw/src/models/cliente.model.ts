import {Entity, model, property, hasOne, hasMany} from '@loopback/repository';
import {Listadepreferencia} from './listadepreferencia.model';

@model()
export class Cliente extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  nome?: string;

  @property({
    type: 'number',
  })
  contacto?: number;

  @property({
    type: 'number',
  })
  nif?: number;

  @hasOne(() => Listadepreferencia)
  listadepreferencia: Listadepreferencia;

  @hasMany(() => Listadepreferencia)
  listadepreferencias: Listadepreferencia[];

  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
