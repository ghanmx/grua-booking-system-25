import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { TowTruckTypeFeaturesDomainFacade } from './towTruckTypeFeatures.domain.facade'
import { TowTruckTypeFeatures } from './towTruckTypeFeatures.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([TowTruckTypeFeatures]),
    DatabaseHelperModule,
  ],
  providers: [
    TowTruckTypeFeaturesDomainFacade,
    TowTruckTypeFeaturesDomainFacade,
  ],
  exports: [TowTruckTypeFeaturesDomainFacade],
})
export class TowTruckTypeFeaturesDomainModule {}
