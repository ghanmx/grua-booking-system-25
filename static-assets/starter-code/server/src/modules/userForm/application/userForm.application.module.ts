import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { UserFormDomainModule } from '../domain'
import { UserFormController } from './userForm.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { UserFormByUserController } from './userFormByUser.controller'

@Module({
  imports: [AuthenticationDomainModule, UserFormDomainModule, UserDomainModule],
  controllers: [UserFormController, UserFormByUserController],
  providers: [],
})
export class UserFormApplicationModule {}
