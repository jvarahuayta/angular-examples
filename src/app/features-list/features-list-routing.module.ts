import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeaturesListComponent } from './features-list.component';

const routes: Routes = [{ path: '', component: FeaturesListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesListRoutingModule { }
