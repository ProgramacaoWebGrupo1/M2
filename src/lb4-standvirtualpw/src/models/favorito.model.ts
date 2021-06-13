import {Entity, model, property} from '@loopback/repository';

@model()
export class Favorito extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  listadepreferenciaId?: number;

  @property({
    type: 'number',
  })
  carroId?: number;

  constructor(data?: Partial<Favorito>) {
    super(data);
  }
}

export interface FavoritoRelations {
  // describe navigational properties here
}

export type FavoritoWithRelations = Favorito & FavoritoRelations;
