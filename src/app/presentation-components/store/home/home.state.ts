import { ID } from '@datorama/akita';

export interface HomeState {
  section1: { eventsIds: ID[]; title: string };
  section2: { eventsIds: ID[]; title: string };
  section3: { eventsIds: ID[]; title: string };
}
