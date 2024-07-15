import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { PasswordResetDomainModule } from '../domain'
import { PasswordResetController } from './passwordReset.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { PasswordResetByUserController } from './passwordResetByUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    PasswordResetDomainModule,

    UserDomainModule,
  ],
  controllers: [PasswordResetController, PasswordResetByUserController],
  providers: [],
})
export class PasswordResetApplicationModule {}
