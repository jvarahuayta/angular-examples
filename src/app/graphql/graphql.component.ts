import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GraphqlDemoService } from './graphql-demo.service';
import { ProductsGraphqlQuery } from './store/products-graphql.store';
import { Product } from './models/product.model';

@Component({
  selector: 'app-graphql',
  templateUrl: './graphql.component.html',
  styleUrls: ['./graphql.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GraphqlComponent implements OnInit {
  constructor(
    public graphqlDemoService: GraphqlDemoService,
    public productsGraphQLQuery: ProductsGraphqlQuery
  ) {}

  ngOnInit(): void {
    this.graphqlDemoService.loadProducts();
  }

  trackBy(product: Product) {
    return product.id;
  }
}
