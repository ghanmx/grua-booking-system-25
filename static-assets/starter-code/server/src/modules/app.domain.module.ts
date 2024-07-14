import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { PasswordResetDomainModule } from './passwordReset/domain'

import { TowTruckTypeDomainModule } from './towTruckType/domain'

import { TowServiceRequestDomainModule } from './towServiceRequest/domain'

import { EventDomainModule } from './event/domain'

import { TowTruckTypeFeaturesDomainModule } from './towTruckTypeFeatures/domain'

import { NotificationPreferenceDomainModule } from './notificationPreference/domain'

import { PasswordHistoryDomainModule } from './passwordHistory/domain'

import { UserFormDomainModule } from './userForm/domain'

import { VehicleFormDomainModule } from './vehicleForm/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

    PasswordResetDomainModule,

    TowTruckTypeDomainModule,

    TowServiceRequestDomainModule,

    EventDomainModule,

    TowTruckTypeFeaturesDomainModule,

    NotificationPreferenceDomainModule,

    PasswordHistoryDomainModule,

    UserFormDomainModule,

    VehicleFormDomainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}
