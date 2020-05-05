import { Component, OnInit } from '@angular/core';
import { HomeQuery } from './store/home/home.query';
import { EventsService } from './services/events.service';
import { combineLatest, Observable } from 'rxjs';
import { EventsQuery } from './store/events/events.query';
import { map } from 'rxjs/operators';
import { ID } from '@datorama/akita';
import { Event } from './models/event.model';

@Component({
  selector: 'app-presentation-components',
  templateUrl: './presentation-components.component.html',
  styleUrls: ['./presentation-components.component.scss'],
})
export class PresentationComponentsComponent implements OnInit {
  viewState$: Observable<string>;
  requestedEventsIds = [];

  constructor(
    public homeQuery: HomeQuery,
    private eventsService: EventsService,
    private eventsQuery: EventsQuery
  ) {
    this.viewState$ = combineLatest([
      this.eventsQuery.selectLoading(),
      this.eventsQuery.selectCount(),
      this.eventsQuery.selectError(),
    ]).pipe(
      map(([loading, count, error]) => {
        if (!!error) {
          return 'ERROR';
        } else if (loading) {
          return 'LOADING';
        } else if (!loading && count === 0) {
          return 'EMPTY';
        } else {
          return 'LIST';
        }
      })
    );
  }

  ngOnInit(): void {}

  onEventBuy(event: Event) {
    this.eventsService.buyEvent(event.id);
  }

  onRequestLoadEvent(eventId: ID) {
    if (this.requestedEventsIds.includes(eventId)) {
      console.log(
        `Se solicita la carga del evento con id: ${eventId} pero ya se solicitó`
      );
    } else {
      console.log(
        `Se solicita la carga del evento con id: ${eventId} SE CARGARÁ`
      );
      this.requestedEventsIds.push(eventId);
      this.eventsService.loadEvent(eventId);
    }
  }
}
