import { EntityState } from '@datorama/akita';
import { Event } from '../../models/event.model';

export interface EventsState extends EntityState<Event> {}
