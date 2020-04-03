import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NicePaginationRoutingModule } from './nice-pagination-routing.module';
import { NicePaginationComponent } from './nice-pagination.component';
import { NicePaginatorModule } from './nice-paginator/nice-paginator.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NicePaginationComponent],
  imports: [
    CommonModule,
    NicePaginationRoutingModule,
    NicePaginatorModule,
    FormsModule
  ]
})
export class NicePaginationModule {}
