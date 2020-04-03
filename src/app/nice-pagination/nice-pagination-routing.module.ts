import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NicePaginationComponent } from './nice-pagination.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: NicePaginationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule],
  exports: [RouterModule]
})
export class NicePaginationRoutingModule {}
