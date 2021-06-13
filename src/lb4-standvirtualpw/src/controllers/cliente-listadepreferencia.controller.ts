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
  Cliente,
  Listadepreferencia,
} from '../models';
import {ClienteRepository} from '../repositories';

export class ClienteListadepreferenciaController {
  constructor(
    @repository(ClienteRepository) protected clienteRepository: ClienteRepository,
  ) { }

  @get('/clientes/{id}/listadepreferencias', {
    responses: {
      '200': {
        description: 'Array of Cliente has many Listadepreferencia',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Listadepreferencia)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Listadepreferencia>,
  ): Promise<Listadepreferencia[]> {
    return this.clienteRepository.listadepreferencias(id).find(filter);
  }

  @post('/clientes/{id}/listadepreferencias', {
    responses: {
      '200': {
        description: 'Cliente model instance',
        content: {'application/json': {schema: getModelSchemaRef(Listadepreferencia)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Cliente.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Listadepreferencia, {
            title: 'NewListadepreferenciaInCliente',
            exclude: ['id'],
            optional: ['clienteId']
          }),
        },
      },
    }) listadepreferencia: Omit<Listadepreferencia, 'id'>,
  ): Promise<Listadepreferencia> {
    return this.clienteRepository.listadepreferencias(id).create(listadepreferencia);
  }

  @patch('/clientes/{id}/listadepreferencias', {
    responses: {
      '200': {
        description: 'Cliente.Listadepreferencia PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Listadepreferencia, {partial: true}),
        },
      },
    })
    listadepreferencia: Partial<Listadepreferencia>,
    @param.query.object('where', getWhereSchemaFor(Listadepreferencia)) where?: Where<Listadepreferencia>,
  ): Promise<Count> {
    return this.clienteRepository.listadepreferencias(id).patch(listadepreferencia, where);
  }

  @del('/clientes/{id}/listadepreferencias', {
    responses: {
      '200': {
        description: 'Cliente.Listadepreferencia DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Listadepreferencia)) where?: Where<Listadepreferencia>,
  ): Promise<Count> {
    return this.clienteRepository.listadepreferencias(id).delete(where);
  }
}
