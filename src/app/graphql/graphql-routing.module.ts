import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraphqlComponent } from './graphql.component';

const routes: Routes = [{ path: '', component: GraphqlComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphqlRoutingModule { }
