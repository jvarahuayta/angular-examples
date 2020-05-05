import { Store, StoreConfig } from '@datorama/akita';
import { HomeState } from './home.state';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@StoreConfig({
  name: 'home-page',
})
export class HomeStore extends Store<HomeState> {
  constructor() {
    super({
      section1: { title: 'Eventos cheveres', eventsIds: ['1', '2'] },
      section2: { title: 'Eventos chidoris', eventsIds: ['2', '3'] },
      section3: { title: 'Todos los eventos', eventsIds: ['1', '2', '3', '4'] },
    });
  }
}
