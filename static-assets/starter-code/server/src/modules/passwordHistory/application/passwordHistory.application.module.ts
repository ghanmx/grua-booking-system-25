import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { PasswordHistoryDomainModule } from '../domain'
import { PasswordHistoryController } from './passwordHistory.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { PasswordHistoryByUserController } from './passwordHistoryByUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    PasswordHistoryDomainModule,

    UserDomainModule,
  ],
  controllers: [PasswordHistoryController, PasswordHistoryByUserController],
  providers: [],
})
export class PasswordHistoryApplicationModule {}
