import { QueryEntity } from '@datorama/akita';
import { EventsState } from './events.state';
import { Injectable } from '@angular/core';
import { EventsStore } from './events.store';

@Injectable({
  providedIn: 'root',
})
export class EventsQuery extends QueryEntity<EventsState> {
  constructor(store: EventsStore) {
    super(store);
  }
}
