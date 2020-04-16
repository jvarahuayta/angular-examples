import { Injectable } from '@angular/core';
import { ProductsApi } from './products.api';
import { tap } from 'rxjs/operators';
import { ProductsGraphqlStore } from './store/products-graphql.store';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GraphqlDemoService {
  constructor(
    private productsApi: ProductsApi,
    private productsGraphqlStore: ProductsGraphqlStore,
    private httpClient: HttpClient
  ) {}

  loadProducts() {
    this.httpClient.get('http://localhost:1337/productos').subscribe();
    this.productsApi
      .getProducts()
      .pipe(
        tap((products) => {
          this.productsGraphqlStore.set(products);
        })
      )
      .subscribe();
  }

  loadProductDetail(productId: ID) {
    this.productsApi
      .getProductDetail(productId)
      .pipe(
        tap((product) => {
          this.productsGraphqlStore.update(product.id, (currentProduct) => ({
            ...currentProduct,
            imagesUrls: product.imagesUrls,
          }));
        })
      )
      .subscribe();
  }
}
