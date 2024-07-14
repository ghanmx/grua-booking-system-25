import { Module } from '@nestjs/common'
import { AuthenticationApplicationModule } from './authentication/application'
import { AuthorizationApplicationModule } from './authorization/application'
import { UserApplicationModule } from './user/application'

import { PasswordResetApplicationModule } from './passwordReset/application'

import { TowTruckTypeApplicationModule } from './towTruckType/application'

import { TowServiceRequestApplicationModule } from './towServiceRequest/application'

import { EventApplicationModule } from './event/application'

import { TowTruckTypeFeaturesApplicationModule } from './towTruckTypeFeatures/application'

import { NotificationPreferenceApplicationModule } from './notificationPreference/application'

import { PasswordHistoryApplicationModule } from './passwordHistory/application'

import { UserFormApplicationModule } from './userForm/application'

import { VehicleFormApplicationModule } from './vehicleForm/application'

import { AiApplicationModule } from './ai/application/ai.application.module'
import { BillingApplicationModule } from './billing/application'
import { NotificationApplicationModule } from './notification/application/notification.application.module'
import { UploadApplicationModule } from './upload/application/upload.application.module'

@Module({
  imports: [
    AuthenticationApplicationModule,
    UserApplicationModule,
    AuthorizationApplicationModule,
    NotificationApplicationModule,
    AiApplicationModule,
    UploadApplicationModule,
    BillingApplicationModule,

    PasswordResetApplicationModule,

    TowTruckTypeApplicationModule,

    TowServiceRequestApplicationModule,

    EventApplicationModule,

    TowTruckTypeFeaturesApplicationModule,

    NotificationPreferenceApplicationModule,

    PasswordHistoryApplicationModule,

    UserFormApplicationModule,

    VehicleFormApplicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppApplicationModule {}
