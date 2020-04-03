import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesListRoutingModule } from './features-list-routing.module';
import { FeaturesListComponent } from './features-list.component';


@NgModule({
  declarations: [FeaturesListComponent],
  imports: [
    CommonModule,
    FeaturesListRoutingModule
  ]
})
export class FeaturesListModule { }
