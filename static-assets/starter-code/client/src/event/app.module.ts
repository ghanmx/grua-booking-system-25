import { Module } from '@nestjs/common';
import { EventsModule } from './events.module';
import { BookingsModule } from '../components/bookings.module';

@Module({
  imports: [EventsModule, BookingsModule],
})
export class AppModule {}
