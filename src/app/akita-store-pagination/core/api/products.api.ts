import { Injectable } from '@angular/core';
import { of, timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';

import { PRODUCTS_MOCK } from '../../mock/products.mock';

@Injectable({
  providedIn: 'root'
})
export class ProductsApi {
  private getFilteredList(query: string | Map<string, string>) {
    if (typeof query === 'string') {
      return PRODUCTS_MOCK.filter(p => p.name.includes(query));
    }
    if (query instanceof Map) {
      return PRODUCTS_MOCK;
    }
  }

  getPage(page: number, pageSize: number, query: string | Map<string, string>) {
    const filteredList = this.getFilteredList(query);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    // Para simular la invocación a un API
    return timer(1000).pipe(
      mapTo({
        // Retornamos la cantidad de registros para verificar
        // si es que ya alcanzamos el tope de páginas
        count: filteredList.length,
        data: filteredList.slice(startIndex, endIndex)
      })
    );
  }
}
