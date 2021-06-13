import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef, param,
  patch,
  post,
  put,
  requestBody,
  response
} from '@loopback/rest';
import {Lista} from '../models';
import {ListaRepository} from '../repositories';


export class ListaController {
  constructor(
    @repository(ListaRepository)
    public listaRepository : ListaRepository
  ) {}

  @post('/listas')
  @response(200, {
    description: 'Lista model instance',
    content: {'application/json': {schema: getModelSchemaRef(Lista)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Lista, {
            title: 'NewLista',
            exclude: ['id'],
          }),
        },
      },
    })
    lista: Omit<Lista, 'id'>,
  ): Promise<Lista> {
    return this.listaRepository.create(lista);
  }

@get('/listas')
  @response(200, {
    description: 'Array of Lista model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Lista, {includeRelations: true}),

        },
      },
    },
  })
  async find(
    @param.filter(Lista) filter?: Filter<Lista>,
  ): Promise<Lista[]> {
    return this.listaRepository.find(filter);
  }
  @get('/listas/count')
  @response(200, {
    description: 'Lista model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Lista) where?: Where<Lista>,
  ): Promise<Count> {
    return this.listaRepository.count(where);
  }
  @get('/listas/{id}')
  @response(200, {
    description: 'Lista model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Lista, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Lista, {exclude: 'where'}) filter?: FilterExcludingWhere<Lista>
  ): Promise<Lista> {
    return this.listaRepository.findById(id, filter);
  }
  @patch('/listas/{id}')
  @response(204, {
    description: 'Listas PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Lista, {partial: true}),
        },
      },
    })
    listas: Lista,
  ): Promise<void> {
    await this.listaRepository.updateById(id, listas);
  }
  @del('/listas/{id}')
  @response(204, {
    description: 'Lista DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.listaRepository.deleteById(id);
  }
  @put('/listas/{id}')
  @response(204, {
    description: 'Lista PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() lista: Lista,
  ): Promise<void> {
    await this.listaRepository.replaceById(id, lista);
  }



}
