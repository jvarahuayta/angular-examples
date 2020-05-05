import { ID } from '@datorama/akita';

export class Event {
  id?: ID;
  portraitUrl?: string;
  title?: string;
  date?: Date;
  price?: number;
  location?: string;
}
