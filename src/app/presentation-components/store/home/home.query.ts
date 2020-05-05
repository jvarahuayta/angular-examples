import { Query } from '@datorama/akita';
import { HomeState } from './home.state';
import { Injectable } from '@angular/core';
import { HomeStore } from './home.store';
import { switchMap, map } from 'rxjs/operators';
import { EventsQuery } from '../events/events.query';
import { combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeQuery extends Query<HomeState> {
  sections$ = this.select((state) => [
    state.section1,
    state.section2,
    state.section3,
  ]);

  constructor(store: HomeStore, private eventsQuery: EventsQuery) {
    super(store);
  }
}
