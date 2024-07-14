import { Controller, Get, Sse } from '@nestjs/common';
import { interval, map } from 'rxjs';
import { EventService } from './event.service';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Sse('stream')
  streamEvents() {
    return this.eventService.getEvents();
  }
}
