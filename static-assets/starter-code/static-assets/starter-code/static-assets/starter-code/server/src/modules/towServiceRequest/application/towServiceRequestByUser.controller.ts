import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { TowServiceRequestDomainFacade } from '@server/modules/towServiceRequest/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { TowServiceRequestApplicationEvent } from './towServiceRequest.application.event'
import { TowServiceRequestCreateDto } from './towServiceRequest.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class TowServiceRequestByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private towServiceRequestDomainFacade: TowServiceRequestDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/towServiceRequests')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.towServiceRequestDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/towServiceRequests')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: TowServiceRequestCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

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
