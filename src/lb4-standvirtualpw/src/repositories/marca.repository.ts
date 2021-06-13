import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Marca, MarcaRelations, Fornecedor, Lista, Carro} from '../models';
import {ListaRepository} from './lista.repository';
import {FornecedorRepository} from './fornecedor.repository';
import {CarroRepository} from './carro.repository';

export class MarcaRepository extends DefaultCrudRepository<
  Marca,
  typeof Marca.prototype.id,
  MarcaRelations
> {

  public readonly fornecedors: HasManyThroughRepositoryFactory<Fornecedor, typeof Fornecedor.prototype.id,
          Lista,
          typeof Marca.prototype.id
        >;

  public readonly carros: HasManyRepositoryFactory<Carro, typeof Marca.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('ListaRepository') protected listaRepositoryGetter: Getter<ListaRepository>, @repository.getter('FornecedorRepository') protected fornecedorRepositoryGetter: Getter<FornecedorRepository>, @repository.getter('CarroRepository') protected carroRepositoryGetter: Getter<CarroRepository>,
  ) {
    super(Marca, dataSource);
    this.carros = this.createHasManyRepositoryFactoryFor('carros', carroRepositoryGetter,);
    this.registerInclusionResolver('carros', this.carros.inclusionResolver);
    this.fornecedors = this.createHasManyThroughRepositoryFactoryFor('fornecedors', fornecedorRepositoryGetter, listaRepositoryGetter,);
    this.registerInclusionResolver('fornecedors', this.fornecedors.inclusionResolver);
  }
}
