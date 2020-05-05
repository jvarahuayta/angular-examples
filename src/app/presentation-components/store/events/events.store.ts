import { EntityStore, StoreConfig } from '@datorama/akita';
import { EventsState } from './events.state';
import { Injectable } from '@angular/core';

@StoreConfig({ name: 'events' })
@Injectable({
  providedIn: 'root',
})
export class EventsStore extends EntityStore<EventsState> {
  constructor() {
    super();
  }
}
