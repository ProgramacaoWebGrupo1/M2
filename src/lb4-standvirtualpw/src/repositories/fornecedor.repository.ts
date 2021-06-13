import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Fornecedor, FornecedorRelations} from '../models';

export class FornecedorRepository extends DefaultCrudRepository<
  Fornecedor,
  typeof Fornecedor.prototype.id,
  FornecedorRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Fornecedor, dataSource);
  }
}
