import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { TowTruckType } from './towTruckType.model'

@Injectable()
export class TowTruckTypeDomainFacade {
  constructor(
    @InjectRepository(TowTruckType)
    private repository: Repository<TowTruckType>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<TowTruckType>): Promise<TowTruckType> {
    return this.repository.save(values)
  }

  async update(
    item: TowTruckType,
    values: Partial<TowTruckType>,
  ): Promise<TowTruckType> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: TowTruckType): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<TowTruckType> = {},
  ): Promise<TowTruckType[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<TowTruckType> = {},
  ): Promise<TowTruckType> {
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
}
