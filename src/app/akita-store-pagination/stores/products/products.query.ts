import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { ProductsState } from './products.state';
import { ProductsStore } from './products.store';

@Injectable({
  providedIn: 'root'
})
export class ProductsQuery extends QueryEntity<ProductsState> {
  loading$ = this.selectLoading();

  /**
   * combineLatest nos permite unir las pultimas emisiones de 2 o
   * más observables con el objetivo de posteriormente trabajarlos.
   * El resultado emitido por combineLatest es un array con las últimas
   * emisiones de los observables.
   * Para este caso unimos la emisión de loading y hasReachedLimit
   * ya que nosotros deshabilitaremos el botón de mostrar más
   * si es que nuestra lista está cargando o hemos alcanzado el límite
   */
  infiniteListShowMoreIsDisabled$ = combineLatest([
    this.selectLoading(),
    this.select(state => state.ui.productsInfiniteList.hasReachedLimit)
  ]).pipe(map(([loading, hasReachedLimit]) => loading || hasReachedLimit));

  page$ = this.select(state => state.ui.productsInfiniteList.pageIds).pipe(
    switchMap(pageIds => this.selectMany(pageIds))
  );

  getProductsInfiniteList() {
    return this.getValue().ui.productsInfiniteList;
  }

  constructor(store: ProductsStore) {
    super(store);
  }
}
