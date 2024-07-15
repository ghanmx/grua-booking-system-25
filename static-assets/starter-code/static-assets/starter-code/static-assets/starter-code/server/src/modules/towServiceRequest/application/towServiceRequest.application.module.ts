import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { TowServiceRequestDomainModule } from '../domain'
import { TowServiceRequestController } from './towServiceRequest.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { TowServiceRequestByUserController } from './towServiceRequestByUser.controller'

import { TowTruckTypeDomainModule } from '../../../modules/towTruckType/domain'

import { TowServiceRequestByTowTruckTypeController } from './towServiceRequestByTowTruckType.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    TowServiceRequestDomainModule,

    UserDomainModule,

    TowTruckTypeDomainModule,
  ],
  controllers: [
    TowServiceRequestController,

    TowServiceRequestByUserController,

    TowServiceRequestByTowTruckTypeController,
  ],
  providers: [],
})
export class TowServiceRequestApplicationModule {}
