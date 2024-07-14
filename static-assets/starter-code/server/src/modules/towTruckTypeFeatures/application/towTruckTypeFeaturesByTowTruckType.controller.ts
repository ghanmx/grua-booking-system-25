import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { TowTruckTypeFeaturesDomainFacade } from '@server/modules/towTruckTypeFeatures/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { TowTruckTypeFeaturesApplicationEvent } from './towTruckTypeFeatures.application.event'
import { TowTruckTypeFeaturesCreateDto } from './towTruckTypeFeatures.dto'

import { TowTruckTypeDomainFacade } from '../../towTruckType/domain'

@Controller('/v1/towTruckTypes')
export class TowTruckTypeFeaturesByTowTruckTypeController {
  constructor(
    private towTruckTypeDomainFacade: TowTruckTypeDomainFacade,

    private towTruckTypeFeaturesDomainFacade: TowTruckTypeFeaturesDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/towTruckType/:towTruckTypeId/towTruckTypeFeaturess')
  async findManyTowTruckTypeId(
    @Param('towTruckTypeId') towTruckTypeId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.towTruckTypeDomainFacade.findOneByIdOrFail(towTruckTypeId)

    const items =
      await this.towTruckTypeFeaturesDomainFacade.findManyByTowTruckType(
        parent,
        queryOptions,
      )

    return items
  }

  @Post('/towTruckType/:towTruckTypeId/towTruckTypeFeaturess')
  async createByTowTruckTypeId(
    @Param('towTruckTypeId') towTruckTypeId: string,
    @Body() body: TowTruckTypeFeaturesCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, towTruckTypeId }

    const item =
      await this.towTruckTypeFeaturesDomainFacade.create(valuesUpdated)

    await this.eventService.emit<TowTruckTypeFeaturesApplicationEvent.TowTruckTypeFeaturesCreated.Payload>(
      TowTruckTypeFeaturesApplicationEvent.TowTruckTypeFeaturesCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
