import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { TowServiceRequest } from './towServiceRequest.model'

import { User } from '../../user/domain'

import { TowTruckType } from '../../towTruckType/domain'

@Injectable()
export class TowServiceRequestDomainFacade {
  constructor(
    @InjectRepository(TowServiceRequest)
    private repository: Repository<TowServiceRequest>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<TowServiceRequest>): Promise<TowServiceRequest> {
    return this.repository.save(values)
  }

  async update(
    item: TowServiceRequest,
    values: Partial<TowServiceRequest>,
  ): Promise<TowServiceRequest> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: TowServiceRequest): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<TowServiceRequest> = {},
  ): Promise<TowServiceRequest[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<TowServiceRequest> = {},
  ): Promise<TowServiceRequest> {
    if (!id) {
      this.databaseHelper.invalidQueryWhere('id')
    }

    const queryOptionsEnsured = {
      includes: queryOptions?.includes,
      filters: {
        id: id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    const item = await query.getOne()

    if (!item) {
      this.databaseHelper.notFoundByQuery(queryOptionsEnsured.filters)
    }

    return item
  }

  async findManyByUser(
    item: User,
    queryOptions: RequestHelper.QueryOptions<TowServiceRequest> = {},
  ): Promise<TowServiceRequest[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('user')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        userId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

  async findManyByTowTruckType(
    item: TowTruckType,
    queryOptions: RequestHelper.QueryOptions<TowServiceRequest> = {},
  ): Promise<TowServiceRequest[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('towTruckType')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        towTruckTypeId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
