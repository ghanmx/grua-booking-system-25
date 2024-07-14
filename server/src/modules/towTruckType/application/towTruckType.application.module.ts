import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { TowTruckTypeDomainModule } from '../domain'
import { TowTruckTypeController } from './towTruckType.controller'

@Module({
  imports: [AuthenticationDomainModule, TowTruckTypeDomainModule],
  controllers: [TowTruckTypeController],
  providers: [],
})
export class TowTruckTypeApplicationModule {}
