import {
  EntityState,
  EntityStore,
  StoreConfig,
  QueryEntity,
} from '@datorama/akita';
import { Product } from '../models/product.model';
import { Injectable } from '@angular/core';

export interface ProductsGraphqlState extends EntityState<Product> {}

@StoreConfig({
  name: 'products-graphql',
})
@Injectable({
  providedIn: 'root',
})
export class ProductsGraphqlStore extends EntityStore<ProductsGraphqlState> {
  constructor() {
    super();
  }
}

@Injectable({
  providedIn: 'root',
})
export class ProductsGraphqlQuery extends QueryEntity<ProductsGraphqlState> {
  products$ = this.selectAll();

  constructor(store: ProductsGraphqlStore) {
    super(store);
  }
}
