import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { PasswordHistoryDomainFacade } from './passwordHistory.domain.facade'
import { PasswordHistory } from './passwordHistory.model'

@Module({
  imports: [TypeOrmModule.forFeature([PasswordHistory]), DatabaseHelperModule],
  providers: [PasswordHistoryDomainFacade, PasswordHistoryDomainFacade],
  exports: [PasswordHistoryDomainFacade],
})
export class PasswordHistoryDomainModule {}
