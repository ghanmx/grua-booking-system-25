import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { VehicleFormDomainModule } from '../domain'
import { VehicleFormController } from './vehicleForm.controller'

import { TowServiceRequestDomainModule } from '../../../modules/towServiceRequest/domain'

import { VehicleFormByTowServiceRequestController } from './vehicleFormByTowServiceRequest.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    VehicleFormDomainModule,

    TowServiceRequestDomainModule,
  ],
  controllers: [
    VehicleFormController,

    VehicleFormByTowServiceRequestController,
  ],
  providers: [],
})
export class VehicleFormApplicationModule {}
