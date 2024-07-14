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
  TowTruckType,
  TowTruckTypeDomainFacade,
} from '@server/modules/towTruckType/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { TowTruckTypeApplicationEvent } from './towTruckType.application.event'
import {
  TowTruckTypeCreateDto,
  TowTruckTypeUpdateDto,
} from './towTruckType.dto'

@Controller('/v1/towTruckTypes')
export class TowTruckTypeController {
  constructor(
    private eventService: EventService,
    private towTruckTypeDomainFacade: TowTruckTypeDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.towTruckTypeDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: TowTruckTypeCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.towTruckTypeDomainFacade.create(body)

    await this.eventService.emit<TowTruckTypeApplicationEvent.TowTruckTypeCreated.Payload>(
      TowTruckTypeApplicationEvent.TowTruckTypeCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:towTruckTypeId')
  async findOne(
    @Param('towTruckTypeId') towTruckTypeId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.towTruckTypeDomainFacade.findOneByIdOrFail(
      towTruckTypeId,
      queryOptions,
    )

    return item
  }

  @Patch('/:towTruckTypeId')
  async update(
    @Param('towTruckTypeId') towTruckTypeId: string,
    @Body() body: TowTruckTypeUpdateDto,
  ) {
    const item =
      await this.towTruckTypeDomainFacade.findOneByIdOrFail(towTruckTypeId)

    const itemUpdated = await this.towTruckTypeDomainFacade.update(
      item,
      body as Partial<TowTruckType>,
    )
    return itemUpdated
  }

  @Delete('/:towTruckTypeId')
  async delete(@Param('towTruckTypeId') towTruckTypeId: string) {
    const item =
      await this.towTruckTypeDomainFacade.findOneByIdOrFail(towTruckTypeId)

    await this.towTruckTypeDomainFacade.delete(item)

    return item
  }
}
