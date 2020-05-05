import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { ID } from '@datorama/akita';
import { EventsQuery } from '../../store/events/events.query';
import { Observable, combineLatest } from 'rxjs';
import { Event } from '../../models/event.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home-event-item',
  templateUrl: './home-event-item.component.html',
  styleUrls: ['./home-event-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeEventItemComponent implements OnInit {
  @Input() eventId: ID;
  event$: Observable<Event>;
  @Output() requestLoad = new EventEmitter<ID>();
  @Output() buy = new EventEmitter<Event>();

  constructor(private eventsQuery: EventsQuery) {}

  ngOnInit(): void {
    if (!this.eventsQuery.hasEntity(this.eventId)) {
      this.requestLoad.emit(this.eventId);
    }
    this.event$ = this.eventsQuery.selectEntity(this.eventId);
  }
}
