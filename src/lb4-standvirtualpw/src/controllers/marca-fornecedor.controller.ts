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
Lista,
Fornecedor,
} from '../models';
import {MarcaRepository} from '../repositories';

export class MarcaFornecedorController {
  constructor(
    @repository(MarcaRepository) protected marcaRepository: MarcaRepository,
  ) { }

  @get('/marcas/{id}/fornecedors', {
    responses: {
      '200': {
        description: 'Array of Marca has many Fornecedor through Lista',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Fornecedor)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Fornecedor>,
  ): Promise<Fornecedor[]> {
    return this.marcaRepository.fornecedors(id).find(filter);
  }

  @post('/marcas/{id}/fornecedors', {
    responses: {
      '200': {
        description: 'create a Fornecedor model instance',
        content: {'application/json': {schema: getModelSchemaRef(Fornecedor)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Marca.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fornecedor, {
            title: 'NewFornecedorInMarca',
            exclude: ['id'],
          }),
        },
      },
    }) fornecedor: Omit<Fornecedor, 'id'>,
  ): Promise<Fornecedor> {
    return this.marcaRepository.fornecedors(id).create(fornecedor);
  }

  @patch('/marcas/{id}/fornecedors', {
    responses: {
      '200': {
        description: 'Marca.Fornecedor PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fornecedor, {partial: true}),
        },
      },
    })
    fornecedor: Partial<Fornecedor>,
    @param.query.object('where', getWhereSchemaFor(Fornecedor)) where?: Where<Fornecedor>,
  ): Promise<Count> {
    return this.marcaRepository.fornecedors(id).patch(fornecedor, where);
  }

  @del('/marcas/{id}/fornecedors', {
    responses: {
      '200': {
        description: 'Marca.Fornecedor DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Fornecedor)) where?: Where<Fornecedor>,
  ): Promise<Count> {
    return this.marcaRepository.fornecedors(id).delete(where);
  }
}
