import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { TowTruckTypeDomainFacade } from './towTruckType.domain.facade'
import { TowTruckType } from './towTruckType.model'

@Module({
  imports: [TypeOrmModule.forFeature([TowTruckType]), DatabaseHelperModule],
  providers: [TowTruckTypeDomainFacade, TowTruckTypeDomainFacade],
  exports: [TowTruckTypeDomainFacade],
})
export class TowTruckTypeDomainModule {}
