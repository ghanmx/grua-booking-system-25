import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { TowServiceRequestDomainFacade } from './towServiceRequest.domain.facade'
import { TowServiceRequest } from './towServiceRequest.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([TowServiceRequest]),
    DatabaseHelperModule,
  ],
  providers: [TowServiceRequestDomainFacade, TowServiceRequestDomainFacade],
  exports: [TowServiceRequestDomainFacade],
})
export class TowServiceRequestDomainModule {}
