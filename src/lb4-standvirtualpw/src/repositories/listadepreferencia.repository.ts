import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Listadepreferencia, ListadepreferenciaRelations, Carro, Favorito} from '../models';
import {FavoritoRepository} from './favorito.repository';
import {CarroRepository} from './carro.repository';

export class ListadepreferenciaRepository extends DefaultCrudRepository<
  Listadepreferencia,
  typeof Listadepreferencia.prototype.id,
  ListadepreferenciaRelations
> {

  public readonly carros: HasManyThroughRepositoryFactory<Carro, typeof Carro.prototype.id,
          Favorito,
          typeof Listadepreferencia.prototype.id
        >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('FavoritoRepository') protected favoritoRepositoryGetter: Getter<FavoritoRepository>, @repository.getter('CarroRepository') protected carroRepositoryGetter: Getter<CarroRepository>,
  ) {
    super(Listadepreferencia, dataSource);
    this.carros = this.createHasManyThroughRepositoryFactoryFor('carros', carroRepositoryGetter, favoritoRepositoryGetter,);
    this.registerInclusionResolver('carros', this.carros.inclusionResolver);
  }
}
