import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentationComponentsRoutingModule } from './presentation-components-routing.module';
import { PresentationComponentsComponent } from './presentation-components.component';
import { HomeEventItemComponent } from './components/home-event-item/home-event-item.component';


@NgModule({
  declarations: [PresentationComponentsComponent, HomeEventItemComponent],
  imports: [
    CommonModule,
    PresentationComponentsRoutingModule
  ]
})
export class PresentationComponentsModule { }
