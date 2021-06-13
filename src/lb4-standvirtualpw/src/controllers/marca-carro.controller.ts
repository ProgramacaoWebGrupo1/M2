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
  Marca,
  Carro,
} from '../models';
import {MarcaRepository} from '../repositories';

export class MarcaCarroController {
  constructor(
    @repository(MarcaRepository) protected marcaRepository: MarcaRepository,
  ) { }

  @get('/marcas/{id}/carros', {
    responses: {
      '200': {
        description: 'Array of Marca has many Carro',
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
    return this.marcaRepository.carros(id).find(filter);
  }

  @post('/marcas/{id}/carros', {
    responses: {
      '200': {
        description: 'Marca model instance',
        content: {'application/json': {schema: getModelSchemaRef(Carro)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Marca.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Carro, {
            title: 'NewCarroInMarca',
            exclude: ['id'],
            optional: ['marcaId']
          }),
        },
      },
    }) carro: Omit<Carro, 'id'>,
  ): Promise<Carro> {
    return this.marcaRepository.carros(id).create(carro);
  }

  @patch('/marcas/{id}/carros', {
    responses: {
      '200': {
        description: 'Marca.Carro PATCH success count',
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
    return this.marcaRepository.carros(id).patch(carro, where);
  }

  @del('/marcas/{id}/carros', {
    responses: {
      '200': {
        description: 'Marca.Carro DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Carro)) where?: Where<Carro>,
  ): Promise<Count> {
    return this.marcaRepository.carros(id).delete(where);
  }
}
