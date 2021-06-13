import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Carro,
  Marca,
} from '../models';
import {CarroRepository} from '../repositories';

export class CarroMarcaController {
  constructor(
    @repository(CarroRepository)
    public carroRepository: CarroRepository,
  ) { }

  @get('/carros/{id}/marca', {
    responses: {
      '200': {
        description: 'Marca belonging to Carro',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Marca)},
          },
        },
      },
    },
  })
  async getMarca(
    @param.path.number('id') id: typeof Carro.prototype.id,
  ): Promise<Marca> {
    return this.carroRepository.marca(id);
  }
}
