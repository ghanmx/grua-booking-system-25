import { Controller, Sse, MessageEvent } from '@nestjs/common';
import { Observable } from 'rxjs';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { TowingRequestApplicationEvent } from '../towingRequest/application/towingRequest.application.event';

@Controller('sse')
export class SseController {
  constructor(private eventEmitter: EventEmitter2) {}

  @Sse('events')
  sendEvents(): Observable<MessageEvent> {
    return new Observable((observer) => {
      const onTowingRequestCreated = (payload) => {
        observer.next({ data: payload });
      };

      this.eventEmitter.on(TowingRequestApplicationEvent.TowingRequestCreated.key, onTowingRequestCreated);

      return () => {
        this.eventEmitter.off(TowingRequestApplicationEvent.TowingRequestCreated.key, onTowingRequestCreated);
      };
    });
  }
}
