import { Injectable } from '@angular/core';
import { ProductsApi } from '../api/products.api';
import { tap } from 'rxjs/operators';
import { ProductsStore } from '../../stores/products/products.store';
import { ProductsQuery } from '../../stores/products/products.query';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private productsStore: ProductsStore,
    private productsApi: ProductsApi,
    private productsQuery: ProductsQuery
  ) {}

  loadProductsForInfiniteList(
    page: number,
    pageSize: number,
    query: string | Map<string, string>,
    resetResults: boolean
  ) {
    this.productsStore.setLoading(true);
    this.productsApi
      .getPage(page, pageSize, query)
      .pipe(
        tap(result => this.productsStore.upsertMany(result.data)),
        tap(_ => this.productsStore.setLoading(false)),
        tap(result => {
          const pageProductsIds = result.data.map(p => p.id);
          // concatenamos a la lista anterior de IDs la
          // nueva lista de IDs obtenida.
          // Si resetResults es true, no concatenamos
          // la lista anterior (por búsqueda)
          const newPageIds = resetResults
            ? [...pageProductsIds]
            : [
                ...this.productsQuery.getProductsInfiniteList().pageIds,
                ...pageProductsIds
              ];
          // Verificamos si nuestra nueva lista tiene
          // la misma logintud que la cantidad de
          // registro totales que vienen del API
          const hasReachedLimit = result.count === newPageIds.length;
          this.productsStore.updateProductsInfiniteList({
            pageIds: newPageIds,
            hasReachedLimit,
            currentPage: page,
            pageSize
          });
        })
      )
      .subscribe();
  }
}
