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
import {Repo} from '../models';
import {RepoRepository} from '../repositories';

export class RepoController {
  constructor(
    @repository(RepoRepository)
    public repoRepository : RepoRepository,
  ) {}

  @post('/repos')
  @response(200, {
    description: 'Repo model instance',
    content: {'application/json': {schema: getModelSchemaRef(Repo)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Repo, {
            title: 'NewRepo',
            exclude: ['id'],
          }),
        },
      },
    })
    repo: Omit<Repo, 'id'>,
  ): Promise<Repo> {
    return this.repoRepository.create(repo);
  }

  @get('/repos/count')
  @response(200, {
    description: 'Repo model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Repo) where?: Where<Repo>,
  ): Promise<Count> {
    return this.repoRepository.count(where);
  }

  @get('/repos')
  @response(200, {
    description: 'Array of Repo model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Repo, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Repo) filter?: Filter<Repo>,
  ): Promise<Repo[]> {
    return this.repoRepository.find(filter);
  }

  @patch('/repos')
  @response(200, {
    description: 'Repo PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Repo, {partial: true}),
        },
      },
    })
    repo: Repo,
    @param.where(Repo) where?: Where<Repo>,
  ): Promise<Count> {
    return this.repoRepository.updateAll(repo, where);
  }

  @get('/repos/{id}')
  @response(200, {
    description: 'Repo model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Repo, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Repo, {exclude: 'where'}) filter?: FilterExcludingWhere<Repo>
  ): Promise<Repo> {
    return this.repoRepository.findById(id, filter);
  }

  @patch('/repos/{id}')
  @response(204, {
    description: 'Repo PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Repo, {partial: true}),
        },
      },
    })
    repo: Repo,
  ): Promise<void> {
    await this.repoRepository.updateById(id, repo);
  }

  @put('/repos/{id}')
  @response(204, {
    description: 'Repo PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() repo: Repo,
  ): Promise<void> {
    await this.repoRepository.replaceById(id, repo);
  }

  @del('/repos/{id}')
  @response(204, {
    description: 'Repo DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.repoRepository.deleteById(id);
  }
}
