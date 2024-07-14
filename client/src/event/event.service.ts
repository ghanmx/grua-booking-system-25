import { Injectable } from '@nestjs/common';
import { interval, map } from 'rxjs';

@Injectable()
export class EventService {
  private events = [];

  emitEvent(event: any) {
    this.events.push(event);
  }

  getEvents() {
    return interval(1000).pipe(map(() => ({ data: this.events })));
  }
}
