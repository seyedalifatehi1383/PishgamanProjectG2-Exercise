import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Repo, RepoRelations} from '../models';

export class RepoRepository extends DefaultCrudRepository<
  Repo,
  typeof Repo.prototype.id,
  RepoRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Repo, dataSource);
  }
}
