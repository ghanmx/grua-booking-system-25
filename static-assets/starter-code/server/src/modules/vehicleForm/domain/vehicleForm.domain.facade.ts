import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { VehicleForm } from './vehicleForm.model'

import { TowServiceRequest } from '../../towServiceRequest/domain'

@Injectable()
export class VehicleFormDomainFacade {
  constructor(
    @InjectRepository(VehicleForm)
    private repository: Repository<VehicleForm>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<VehicleForm>): Promise<VehicleForm> {
    return this.repository.save(values)
  }

  async update(
    item: VehicleForm,
    values: Partial<VehicleForm>,
  ): Promise<VehicleForm> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: VehicleForm): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<VehicleForm> = {},
  ): Promise<VehicleForm[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<VehicleForm> = {},
  ): Promise<VehicleForm> {
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

  async findManyByVehicle(
    item: TowServiceRequest,
    queryOptions: RequestHelper.QueryOptions<VehicleForm> = {},
  ): Promise<VehicleForm[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('vehicle')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        vehicleId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
