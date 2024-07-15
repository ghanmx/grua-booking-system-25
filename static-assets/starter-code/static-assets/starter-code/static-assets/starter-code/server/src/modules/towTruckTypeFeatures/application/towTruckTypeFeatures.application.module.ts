import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { TowTruckTypeFeaturesDomainModule } from '../domain'
import { TowTruckTypeFeaturesController } from './towTruckTypeFeatures.controller'

import { TowTruckTypeDomainModule } from '../../../modules/towTruckType/domain'

import { TowTruckTypeFeaturesByTowTruckTypeController } from './towTruckTypeFeaturesByTowTruckType.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    TowTruckTypeFeaturesDomainModule,

    TowTruckTypeDomainModule,
  ],
  controllers: [
    TowTruckTypeFeaturesController,

    TowTruckTypeFeaturesByTowTruckTypeController,
  ],
  providers: [],
})
export class TowTruckTypeFeaturesApplicationModule {}
