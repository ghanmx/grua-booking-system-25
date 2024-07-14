import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { NotificationPreferenceDomainFacade } from './notificationPreference.domain.facade'
import { NotificationPreference } from './notificationPreference.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([NotificationPreference]),
    DatabaseHelperModule,
  ],
  providers: [
    NotificationPreferenceDomainFacade,
    NotificationPreferenceDomainFacade,
  ],
  exports: [NotificationPreferenceDomainFacade],
})
export class NotificationPreferenceDomainModule {}
