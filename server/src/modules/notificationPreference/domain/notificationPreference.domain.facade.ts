import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { NotificationPreference } from './notificationPreference.model'

import { User } from '../../user/domain'

@Injectable()
export class NotificationPreferenceDomainFacade {
  constructor(
    @InjectRepository(NotificationPreference)
    private repository: Repository<NotificationPreference>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(
    values: Partial<NotificationPreference>,
  ): Promise<NotificationPreference> {
    return this.repository.save(values)
  }

  async update(
    item: NotificationPreference,
    values: Partial<NotificationPreference>,
  ): Promise<NotificationPreference> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: NotificationPreference): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<NotificationPreference> = {},
  ): Promise<NotificationPreference[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<NotificationPreference> = {},
  ): Promise<NotificationPreference> {
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
    queryOptions: RequestHelper.QueryOptions<NotificationPreference> = {},
  ): Promise<NotificationPreference[]> {
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
}
