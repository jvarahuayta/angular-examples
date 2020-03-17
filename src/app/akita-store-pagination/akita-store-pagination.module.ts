import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AkitaStorePaginationRoutingModule } from './akita-store-pagination-routing.module';
import { AkitaStorePaginationComponent } from './akita-store-pagination.component';

@NgModule({
  declarations: [AkitaStorePaginationComponent],
  imports: [
    CommonModule,
    AkitaStorePaginationRoutingModule,
    ReactiveFormsModule
  ]
})
export class AkitaStorePaginationModule {}
