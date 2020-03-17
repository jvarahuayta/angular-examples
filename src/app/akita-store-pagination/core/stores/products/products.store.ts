import { EntityStore, StoreConfig, ID } from '@datorama/akita';
import { ProductsState } from './products.state';
import { Injectable } from '@angular/core';

@StoreConfig({
  name: 'products'
})
@Injectable({
  providedIn: 'root'
})
export class ProductsStore extends EntityStore<ProductsState> {
  constructor() {
    super({
      ui: {
        productsInfiniteList: {
          currentPage: 1,
          pageSize: 6,
          pageIds: [],
          hasReachedLimit: false
        }
      }
    });
  }

  updateProductsInfiniteList(
    payload: ProductsState['ui']['productsInfiniteList']
  ) {
    this.update({
      ui: {
        ...this.getValue().ui,
        productsInfiniteList: payload
      }
    });
  }
}
