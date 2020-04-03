import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NicePaginatorComponent } from './nice-paginator.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NicePaginatorComponent],
  exports: [NicePaginatorComponent]
})
export class NicePaginatorModule {}
