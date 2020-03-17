import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AkitaStorePaginationComponent } from './akita-store-pagination.component';

const routes: Routes = [{ path: '', component: AkitaStorePaginationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AkitaStorePaginationRoutingModule { }
