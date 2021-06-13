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
import {Listadepreferencia} from '../models';
import {ListadepreferenciaRepository} from '../repositories';

export class ListadepreferenciaController {
  constructor(
    @repository(ListadepreferenciaRepository)
    public listadepreferenciaRepository : ListadepreferenciaRepository,
  ) {}

  @post('/listadepreferencias')
  @response(200, {
    description: 'Listadepreferencia model instance',
    content: {'application/json': {schema: getModelSchemaRef(Listadepreferencia)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Listadepreferencia, {
            title: 'NewListadepreferencia',
            exclude: ['id'],
          }),
        },
      },
    })
    listadepreferencia: Omit<Listadepreferencia, 'id'>,
  ): Promise<Listadepreferencia> {
    return this.listadepreferenciaRepository.create(listadepreferencia);
  }

  @get('/listadepreferencias/count')
  @response(200, {
    description: 'Listadepreferencia model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Listadepreferencia) where?: Where<Listadepreferencia>,
  ): Promise<Count> {
    return this.listadepreferenciaRepository.count(where);
  }

  @get('/listadepreferencias')
  @response(200, {
    description: 'Array of Listadepreferencia model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Listadepreferencia, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Listadepreferencia) filter?: Filter<Listadepreferencia>,
  ): Promise<Listadepreferencia[]> {
    return this.listadepreferenciaRepository.find(filter);
  }

  @patch('/listadepreferencias')
  @response(200, {
    description: 'Listadepreferencia PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Listadepreferencia, {partial: true}),
        },
      },
    })
    listadepreferencia: Listadepreferencia,
    @param.where(Listadepreferencia) where?: Where<Listadepreferencia>,
  ): Promise<Count> {
    return this.listadepreferenciaRepository.updateAll(listadepreferencia, where);
  }

  @get('/listadepreferencias/{id}')
  @response(200, {
    description: 'Listadepreferencia model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Listadepreferencia, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Listadepreferencia, {exclude: 'where'}) filter?: FilterExcludingWhere<Listadepreferencia>
  ): Promise<Listadepreferencia> {
    return this.listadepreferenciaRepository.findById(id, filter);
  }

  @patch('/listadepreferencias/{id}')
  @response(204, {
    description: 'Listadepreferencia PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Listadepreferencia, {partial: true}),
        },
      },
    })
    listadepreferencia: Listadepreferencia,
  ): Promise<void> {
    await this.listadepreferenciaRepository.updateById(id, listadepreferencia);
  }

  @put('/listadepreferencias/{id}')
  @response(204, {
    description: 'Listadepreferencia PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() listadepreferencia: Listadepreferencia,
  ): Promise<void> {
    await this.listadepreferenciaRepository.replaceById(id, listadepreferencia);
  }

  @del('/listadepreferencias/{id}')
  @response(204, {
    description: 'Listadepreferencia DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.listadepreferenciaRepository.deleteById(id);
  }
}
