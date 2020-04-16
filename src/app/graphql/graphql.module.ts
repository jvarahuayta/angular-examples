import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphqlRoutingModule } from './graphql-routing.module';
import { GraphqlComponent } from './graphql.component';
import { GraphQLModule as VendorGraphQLModule } from '../graphql.module';
import { ProductsApi } from './products.api';
import { GraphqlDemoService } from './graphql-demo.service';

@NgModule({
  declarations: [GraphqlComponent],
  imports: [CommonModule, GraphqlRoutingModule, VendorGraphQLModule],
  providers: [ProductsApi, GraphqlDemoService],
})
export class GraphqlModule {}
