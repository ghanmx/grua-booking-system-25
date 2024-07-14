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
  TowTruckTypeFeatures,
  TowTruckTypeFeaturesDomainFacade,
} from '@server/modules/towTruckTypeFeatures/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { TowTruckTypeFeaturesApplicationEvent } from './towTruckTypeFeatures.application.event'
import {
  TowTruckTypeFeaturesCreateDto,
  TowTruckTypeFeaturesUpdateDto,
} from './towTruckTypeFeatures.dto'

@Controller('/v1/towTruckTypeFeatures')
export class TowTruckTypeFeaturesController {
  constructor(
    private eventService: EventService,
    private towTruckTypeFeaturesDomainFacade: TowTruckTypeFeaturesDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items =
      await this.towTruckTypeFeaturesDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: TowTruckTypeFeaturesCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.towTruckTypeFeaturesDomainFacade.create(body)

    await this.eventService.emit<TowTruckTypeFeaturesApplicationEvent.TowTruckTypeFeaturesCreated.Payload>(
      TowTruckTypeFeaturesApplicationEvent.TowTruckTypeFeaturesCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:towTruckTypeFeaturesId')
  async findOne(
    @Param('towTruckTypeFeaturesId') towTruckTypeFeaturesId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.towTruckTypeFeaturesDomainFacade.findOneByIdOrFail(
      towTruckTypeFeaturesId,
      queryOptions,
    )

    return item
  }

  @Patch('/:towTruckTypeFeaturesId')
  async update(
    @Param('towTruckTypeFeaturesId') towTruckTypeFeaturesId: string,
    @Body() body: TowTruckTypeFeaturesUpdateDto,
  ) {
    const item = await this.towTruckTypeFeaturesDomainFacade.findOneByIdOrFail(
      towTruckTypeFeaturesId,
    )

    const itemUpdated = await this.towTruckTypeFeaturesDomainFacade.update(
      item,
      body as Partial<TowTruckTypeFeatures>,
    )
    return itemUpdated
  }

  @Delete('/:towTruckTypeFeaturesId')
  async delete(
    @Param('towTruckTypeFeaturesId') towTruckTypeFeaturesId: string,
  ) {
    const item = await this.towTruckTypeFeaturesDomainFacade.findOneByIdOrFail(
      towTruckTypeFeaturesId,
    )

    await this.towTruckTypeFeaturesDomainFacade.delete(item)

    return item
  }
}
