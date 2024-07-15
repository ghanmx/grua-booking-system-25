import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationPasswordResetSubscriber } from './subscribers/notification.passwordReset.subscriber'

import { NotificationTowTruckTypeSubscriber } from './subscribers/notification.towTruckType.subscriber'

import { NotificationTowServiceRequestSubscriber } from './subscribers/notification.towServiceRequest.subscriber'

import { NotificationEventSubscriber } from './subscribers/notification.event.subscriber'

import { NotificationTowTruckTypeFeaturesSubscriber } from './subscribers/notification.towTruckTypeFeatures.subscriber'

import { NotificationNotificationPreferenceSubscriber } from './subscribers/notification.notificationPreference.subscriber'

import { NotificationPasswordHistorySubscriber } from './subscribers/notification.passwordHistory.subscriber'

import { NotificationUserFormSubscriber } from './subscribers/notification.userForm.subscriber'

import { NotificationVehicleFormSubscriber } from './subscribers/notification.vehicleForm.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [
    NotificationPasswordResetSubscriber,

    NotificationTowTruckTypeSubscriber,

    NotificationTowServiceRequestSubscriber,

    NotificationEventSubscriber,

    NotificationTowTruckTypeFeaturesSubscriber,

    NotificationNotificationPreferenceSubscriber,

    NotificationPasswordHistorySubscriber,

    NotificationUserFormSubscriber,

    NotificationVehicleFormSubscriber,
  ],
  exports: [],
})
export class NotificationInfrastructureModule {}
