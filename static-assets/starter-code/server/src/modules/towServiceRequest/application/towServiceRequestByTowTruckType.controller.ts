import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { TowServiceRequestDomainFacade } from '@server/modules/towServiceRequest/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { TowServiceRequestApplicationEvent } from './towServiceRequest.application.event'
import { TowServiceRequestCreateDto } from './towServiceRequest.dto'

import { TowTruckTypeDomainFacade } from '../../towTruckType/domain'

@Controller('/v1/towTruckTypes')
export class TowServiceRequestByTowTruckTypeController {
  constructor(
    private towTruckTypeDomainFacade: TowTruckTypeDomainFacade,

    private towServiceRequestDomainFacade: TowServiceRequestDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/towTruckType/:towTruckTypeId/towServiceRequests')
  async findManyTowTruckTypeId(
    @Param('towTruckTypeId') towTruckTypeId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.towTruckTypeDomainFacade.findOneByIdOrFail(towTruckTypeId)

    const items =
      await this.towServiceRequestDomainFacade.findManyByTowTruckType(
        parent,
        queryOptions,
      )

    return items
  }

  @Post('/towTruckType/:towTruckTypeId/towServiceRequests')
  async createByTowTruckTypeId(
    @Param('towTruckTypeId') towTruckTypeId: string,
    @Body() body: TowServiceRequestCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, towTruckTypeId }

    const item = await this.towServiceRequestDomainFacade.create(valuesUpdated)

    await this.eventService.emit<TowServiceRequestApplicationEvent.TowServiceRequestCreated.Payload>(
      TowServiceRequestApplicationEvent.TowServiceRequestCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
