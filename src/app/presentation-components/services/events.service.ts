import { Injectable } from '@angular/core';
import { EventsStore } from '../store/events/events.store';
import { timer } from 'rxjs';
import { tap } from 'rxjs/operators';
import { EVENTS_DATA } from '../data/events.data';
import { Event } from '../models/event.model';
import { ID } from '@datorama/akita';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private eventsStore: EventsStore) {}

  loadAll() {
    timer(1000)
      .pipe(
        tap(() => {
          this.eventsStore.set(EVENTS_DATA);
        })
      )
      .subscribe();
  }

  buyEvent(eventId: ID) {
    //TODO buy event
    alert(`El cliente ha comprado el evento con id: ${eventId}`);
  }

  loadEvent(eventId: ID) {
    const randomNumber = Math.random() * 4 + 1;
    timer(randomNumber * 1000)
      .pipe(
        tap(() => {
          const event = EVENTS_DATA.find((event) => event.id === eventId);
          this.eventsStore.upsert(event.id, event);
        })
      )
      .subscribe();
  }
}
