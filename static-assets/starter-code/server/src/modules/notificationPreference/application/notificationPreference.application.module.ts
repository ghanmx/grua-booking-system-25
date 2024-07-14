import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { NotificationPreferenceDomainModule } from '../domain'
import { NotificationPreferenceController } from './notificationPreference.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { NotificationPreferenceByUserController } from './notificationPreferenceByUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    NotificationPreferenceDomainModule,

    UserDomainModule,
  ],
  controllers: [
    NotificationPreferenceController,

    NotificationPreferenceByUserController,
  ],
  providers: [],
})
export class NotificationPreferenceApplicationModule {}
