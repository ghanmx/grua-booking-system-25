import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import {
  TowServiceRequest,
  TowServiceRequestDomainFacade,
} from '@server/modules/towServiceRequest/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { TowServiceRequestApplicationEvent } from './towServiceRequest.application.event'
import {
  TowServiceRequestCreateDto,
  TowServiceRequestUpdateDto,
} from './towServiceRequest.dto'

@Controller('/v1/towServiceRequests')
export class TowServiceRequestController {
  constructor(
    private eventService: EventService,
    private towServiceRequestDomainFacade: TowServiceRequestDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items =
      await this.towServiceRequestDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: TowServiceRequestCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.towServiceRequestDomainFacade.create(body)

    await this.eventService.emit<TowServiceRequestApplicationEvent.TowServiceRequestCreated.Payload>(
      TowServiceRequestApplicationEvent.TowServiceRequestCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:towServiceRequestId')
  async findOne(
    @Param('towServiceRequestId') towServiceRequestId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.towServiceRequestDomainFacade.findOneByIdOrFail(
      towServiceRequestId,
      queryOptions,
    )

    return item
  }

  @Patch('/:towServiceRequestId')
  async update(
    @Param('towServiceRequestId') towServiceRequestId: string,
    @Body() body: TowServiceRequestUpdateDto,
  ) {
    const item =
      await this.towServiceRequestDomainFacade.findOneByIdOrFail(
        towServiceRequestId,
      )

    const itemUpdated = await this.towServiceRequestDomainFacade.update(
      item,
      body as Partial<TowServiceRequest>,
    )
    return itemUpdated
  }

  @Delete('/:towServiceRequestId')
  async delete(@Param('towServiceRequestId') towServiceRequestId: string) {
    const item =
      await this.towServiceRequestDomainFacade.findOneByIdOrFail(
        towServiceRequestId,
      )

    await this.towServiceRequestDomainFacade.delete(item)

    return item
  }
}
