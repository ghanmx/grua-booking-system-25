import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { TowTruckTypeFeatures } from './towTruckTypeFeatures.model'

import { TowTruckType } from '../../towTruckType/domain'

@Injectable()
export class TowTruckTypeFeaturesDomainFacade {
  constructor(
    @InjectRepository(TowTruckTypeFeatures)
    private repository: Repository<TowTruckTypeFeatures>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(
    values: Partial<TowTruckTypeFeatures>,
  ): Promise<TowTruckTypeFeatures> {
    return this.repository.save(values)
  }

  async update(
    item: TowTruckTypeFeatures,
    values: Partial<TowTruckTypeFeatures>,
  ): Promise<TowTruckTypeFeatures> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: TowTruckTypeFeatures): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<TowTruckTypeFeatures> = {},
  ): Promise<TowTruckTypeFeatures[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<TowTruckTypeFeatures> = {},
  ): Promise<TowTruckTypeFeatures> {
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

  async findManyByTowTruckType(
    item: TowTruckType,
    queryOptions: RequestHelper.QueryOptions<TowTruckTypeFeatures> = {},
  ): Promise<TowTruckTypeFeatures[]> {
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
