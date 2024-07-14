import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { VehicleFormDomainFacade } from './vehicleForm.domain.facade'
import { VehicleForm } from './vehicleForm.model'

@Module({
  imports: [TypeOrmModule.forFeature([VehicleForm]), DatabaseHelperModule],
  providers: [VehicleFormDomainFacade, VehicleFormDomainFacade],
  exports: [VehicleFormDomainFacade],
})
export class VehicleFormDomainModule {}
