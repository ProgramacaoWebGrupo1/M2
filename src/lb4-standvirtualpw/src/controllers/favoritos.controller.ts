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
import {Favorito} from '../models';
import {FavoritoRepository} from '../repositories';


export class FavoritoController {
  constructor(
    @repository(FavoritoRepository)
    public favoritoRepository : FavoritoRepository
  ) {}

  @post('/favoritos')
  @response(200, {
    description: 'Favorito model instance',
    content: {'application/json': {schema: getModelSchemaRef(Favorito)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Favorito, {
            title: 'NewFavorito',
            exclude: ['id'],
          }),
        },
      },
    })
    favorito: Omit<Favorito, 'id'>,
  ): Promise<Favorito> {
    return this.favoritoRepository.create(favorito);
  }

@get('/favoritos')
  @response(200, {
    description: 'Array of Favorito model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Favorito, {includeRelations: true}),

        },
      },
    },
  })
  async find(
    @param.filter(Favorito) filter?: Filter<Favorito>,
  ): Promise<Favorito[]> {
    return this.favoritoRepository.find(filter);
  }
  @get('/favoritos/count')
  @response(200, {
    description: 'Favorito model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Favorito) where?: Where<Favorito>,
  ): Promise<Count> {
    return this.favoritoRepository.count(where);
  }
  @get('/favoritos/{id}')
  @response(200, {
    description: 'Favorito model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Favorito, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Favorito, {exclude: 'where'}) filter?: FilterExcludingWhere<Favorito>
  ): Promise<Favorito> {
    return this.favoritoRepository.findById(id, filter);
  }
  @patch('/favoritos/{id}')
  @response(204, {
    description: 'Favorito PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Favorito, {partial: true}),
        },
      },
    })
    favorito: Favorito,
  ): Promise<void> {
    await this.favoritoRepository.updateById(id, favorito);
  }
  @del('/favoritos/{id}')
  @response(204, {
    description: 'Favorito DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.favoritoRepository.deleteById(id);
  }
  @put('/favoritos/{id}')
  @response(204, {
    description: 'Favorito PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() favorito: Favorito,
  ): Promise<void> {
    await this.favoritoRepository.replaceById(id, favorito);
  }



}
