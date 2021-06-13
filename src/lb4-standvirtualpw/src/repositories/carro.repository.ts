import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Carro, CarroRelations, Marca} from '../models';
import {MarcaRepository} from './marca.repository';

export class CarroRepository extends DefaultCrudRepository<
  Carro,
  typeof Carro.prototype.id,
  CarroRelations
> {

  public readonly marca: BelongsToAccessor<Marca, typeof Carro.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('MarcaRepository') protected marcaRepositoryGetter: Getter<MarcaRepository>,
  ) {
    super(Carro, dataSource);
    this.marca = this.createBelongsToAccessorFor('marca', marcaRepositoryGetter,);
    this.registerInclusionResolver('marca', this.marca.inclusionResolver);
  }
}
