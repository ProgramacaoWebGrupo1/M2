import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Carro} from '../models';
import {CarroRepository} from '../repositories';

export class CarroController {
  constructor(
    @repository(CarroRepository)
    public carroRepository : CarroRepository,
  ) {}

  @post('/carros')
  @response(200, {
    description: 'Carro model instance',
    content: {'application/json': {schema: getModelSchemaRef(Carro)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Carro, {
            title: 'NewCarro',
            exclude: ['id'],
          }),
        },
      },
    })
    carro: Omit<Carro, 'id'>,
  ): Promise<Carro> {
    return this.carroRepository.create(carro);
  }

  @get('/carros/count')
  @response(200, {
    description: 'Carro model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Carro) where?: Where<Carro>,
  ): Promise<Count> {
    return this.carroRepository.count(where);
  }

  @get('/carros')
  @response(200, {
    description: 'Array of Carro model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Carro, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Carro) filter?: Filter<Carro>,
  ): Promise<Carro[]> {
    return this.carroRepository.find(filter);
  }

  @patch('/carros')
  @response(200, {
    description: 'Carro PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Carro, {partial: true}),
        },
      },
    })
    carro: Carro,
    @param.where(Carro) where?: Where<Carro>,
  ): Promise<Count> {
    return this.carroRepository.updateAll(carro, where);
  }

  @get('/carros/{id}')
  @response(200, {
    description: 'Carro model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Carro, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Carro, {exclude: 'where'}) filter?: FilterExcludingWhere<Carro>
  ): Promise<Carro> {
    return this.carroRepository.findById(id, filter);
  }

  @patch('/carros/{id}')
  @response(204, {
    description: 'Carro PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Carro, {partial: true}),
        },
      },
    })
    carro: Carro,
  ): Promise<void> {
    await this.carroRepository.updateById(id, carro);
  }

  @put('/carros/{id}')
  @response(204, {
    description: 'Carro PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() carro: Carro,
  ): Promise<void> {
    await this.carroRepository.replaceById(id, carro);
  }

  @del('/carros/{id}')
  @response(204, {
    description: 'Carro DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.carroRepository.deleteById(id);
  }
}
