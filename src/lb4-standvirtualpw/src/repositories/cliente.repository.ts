import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Cliente, ClienteRelations, Listadepreferencia} from '../models';
import {ListadepreferenciaRepository} from './listadepreferencia.repository';

export class ClienteRepository extends DefaultCrudRepository<
  Cliente,
  typeof Cliente.prototype.id,
  ClienteRelations
> {

  public readonly listadepreferencia: HasOneRepositoryFactory<Listadepreferencia, typeof Cliente.prototype.id>;

  public readonly listadepreferencias: HasManyRepositoryFactory<Listadepreferencia, typeof Cliente.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('ListadepreferenciaRepository') protected listadepreferenciaRepositoryGetter: Getter<ListadepreferenciaRepository>,
  ) {
    super(Cliente, dataSource);
    this.listadepreferencias = this.createHasManyRepositoryFactoryFor('listadepreferencias', listadepreferenciaRepositoryGetter,);
    this.registerInclusionResolver('listadepreferencias', this.listadepreferencias.inclusionResolver);
    this.listadepreferencia = this.createHasOneRepositoryFactoryFor('listadepreferencia', listadepreferenciaRepositoryGetter);
    this.registerInclusionResolver('listadepreferencia', this.listadepreferencia.inclusionResolver);
  }
}
