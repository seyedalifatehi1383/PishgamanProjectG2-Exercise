import {Entity, model, property} from '@loopback/repository';

@model()
export class Repo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  productName: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'number',
    required: true,
  })
  count: number;


  constructor(data?: Partial<Repo>) {
    super(data);
  }
}

export interface RepoRelations {
  // describe navigational properties here
}

export type RepoWithRelations = Repo & RepoRelations;
