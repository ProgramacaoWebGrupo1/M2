import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Favorito, FavoritoRelations} from '../models';

export class FavoritoRepository extends DefaultCrudRepository<
  Favorito,
  typeof Favorito.prototype.id,
  FavoritoRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Favorito, dataSource);
  }
}
