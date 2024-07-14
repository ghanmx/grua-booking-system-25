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
  VehicleForm,
  VehicleFormDomainFacade,
} from '@server/modules/vehicleForm/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { VehicleFormApplicationEvent } from './vehicleForm.application.event'
import { VehicleFormCreateDto, VehicleFormUpdateDto } from './vehicleForm.dto'

@Controller('/v1/vehicleForms')
export class VehicleFormController {
  constructor(
    private eventService: EventService,
    private vehicleFormDomainFacade: VehicleFormDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.vehicleFormDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: VehicleFormCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.vehicleFormDomainFacade.create(body)

    await this.eventService.emit<VehicleFormApplicationEvent.VehicleFormCreated.Payload>(
      VehicleFormApplicationEvent.VehicleFormCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:vehicleFormId')
  async findOne(
    @Param('vehicleFormId') vehicleFormId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.vehicleFormDomainFacade.findOneByIdOrFail(
      vehicleFormId,
      queryOptions,
    )

    return item
  }

  @Patch('/:vehicleFormId')
  async update(
    @Param('vehicleFormId') vehicleFormId: string,
    @Body() body: VehicleFormUpdateDto,
  ) {
    const item =
      await this.vehicleFormDomainFacade.findOneByIdOrFail(vehicleFormId)

    const itemUpdated = await this.vehicleFormDomainFacade.update(
      item,
      body as Partial<VehicleForm>,
    )
    return itemUpdated
  }

  @Delete('/:vehicleFormId')
  async delete(@Param('vehicleFormId') vehicleFormId: string) {
    const item =
      await this.vehicleFormDomainFacade.findOneByIdOrFail(vehicleFormId)

    await this.vehicleFormDomainFacade.delete(item)

    return item
  }
}
