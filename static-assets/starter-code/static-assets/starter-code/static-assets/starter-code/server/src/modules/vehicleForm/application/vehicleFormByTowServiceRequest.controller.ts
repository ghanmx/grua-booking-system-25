import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { VehicleFormDomainFacade } from '@server/modules/vehicleForm/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { VehicleFormApplicationEvent } from './vehicleForm.application.event'
import { VehicleFormCreateDto } from './vehicleForm.dto'

import { TowServiceRequestDomainFacade } from '../../towServiceRequest/domain'

@Controller('/v1/towServiceRequests')
export class VehicleFormByTowServiceRequestController {
  constructor(
    private towServiceRequestDomainFacade: TowServiceRequestDomainFacade,

    private vehicleFormDomainFacade: VehicleFormDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/vehicle/:vehicleId/vehicleForms')
  async findManyVehicleId(
    @Param('vehicleId') vehicleId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.towServiceRequestDomainFacade.findOneByIdOrFail(vehicleId)

    const items = await this.vehicleFormDomainFacade.findManyByVehicle(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/vehicle/:vehicleId/vehicleForms')
  async createByVehicleId(
    @Param('vehicleId') vehicleId: string,
    @Body() body: VehicleFormCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, vehicleId }

    const item = await this.vehicleFormDomainFacade.create(valuesUpdated)

    await this.eventService.emit<VehicleFormApplicationEvent.VehicleFormCreated.Payload>(
      VehicleFormApplicationEvent.VehicleFormCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
