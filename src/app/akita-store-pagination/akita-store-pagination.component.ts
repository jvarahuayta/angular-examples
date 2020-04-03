import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { debounceTime, tap } from 'rxjs/operators';

import { ProductsService } from './core/services/products.service';
import { ProductsQuery } from './stores/products/products.query';

const PAGE_SIZE = 20;

@Component({
  selector: 'app-akita-store-pagination',
  templateUrl: './akita-store-pagination.component.html',
  styleUrls: ['./akita-store-pagination.component.scss']
})
export class AkitaStorePaginationComponent implements OnInit {
  queryFC: FormControl;

  constructor(
    public productsQuery: ProductsQuery,
    public productsService: ProductsService,
    private fb: FormBuilder
  ) {
    this._buildForm();
    this._initFormListeners();
  }

  private _initFormListeners() {
    this.queryFC.valueChanges
      .pipe(
        debounceTime(300),
        tap(val =>
          this.productsService.loadProductsForInfiniteList(
            1,
            PAGE_SIZE,
            val,
            true // Limpiar anteriores resultados
          )
        )
      )
      .subscribe();
  }

  private _buildForm() {
    this.queryFC = this.fb.control('');
  }

  private _loadFirstResults() {
    this.productsService.loadProductsForInfiniteList(
      1,
      PAGE_SIZE,
      this.queryFC.value,
      false // Mantener resultados anteriores
    );
  }

  public showMore() {
    this.productsService.loadProductsForInfiniteList(
      this.productsQuery.getProductsInfiniteList().currentPage + 1,
      PAGE_SIZE,
      this.queryFC.value,
      false // Mantener resultados anteriores
    );
  }

  ngOnInit(): void {
    this._loadFirstResults();
  }
}
