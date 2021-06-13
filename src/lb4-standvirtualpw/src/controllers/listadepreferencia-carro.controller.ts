import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
  import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
Listadepreferencia,
Favorito,
Carro,
} from '../models';
import {ListadepreferenciaRepository} from '../repositories';

export class ListadepreferenciaCarroController {
  constructor(
    @repository(ListadepreferenciaRepository) protected listadepreferenciaRepository: ListadepreferenciaRepository,
  ) { }

  @get('/listadepreferencias/{id}/carros', {
    responses: {
      '200': {
        description: 'Array of Listadepreferencia has many Carro through Favorito',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Carro)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Carro>,
  ): Promise<Carro[]> {
    return this.listadepreferenciaRepository.carros(id).find(filter);
  }

  @post('/listadepreferencias/{id}/carros', {
    responses: {
      '200': {
        description: 'create a Carro model instance',
        content: {'application/json': {schema: getModelSchemaRef(Carro)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Listadepreferencia.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Carro, {
            title: 'NewCarroInListadepreferencia',
            exclude: ['id'],
          }),
        },
      },
    }) carro: Omit<Carro, 'id'>,
  ): Promise<Carro> {
    return this.listadepreferenciaRepository.carros(id).create(carro);
  }

  @patch('/listadepreferencias/{id}/carros', {
    responses: {
      '200': {
        description: 'Listadepreferencia.Carro PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Carro, {partial: true}),
        },
      },
    })
    carro: Partial<Carro>,
    @param.query.object('where', getWhereSchemaFor(Carro)) where?: Where<Carro>,
  ): Promise<Count> {
    return this.listadepreferenciaRepository.carros(id).patch(carro, where);
  }

  @del('/listadepreferencias/{id}/carros', {
    responses: {
      '200': {
        description: 'Listadepreferencia.Carro DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Carro)) where?: Where<Carro>,
  ): Promise<Count> {
    return this.listadepreferenciaRepository.carros(id).delete(where);
  }
}
