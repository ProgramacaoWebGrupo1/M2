import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Lista, ListaRelations} from '../models';

export class ListaRepository extends DefaultCrudRepository<
  Lista,
  typeof Lista.prototype.id,
  ListaRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Lista, dataSource);
  }
}
