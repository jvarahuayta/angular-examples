import { EntityState, ID } from '@datorama/akita';
import { Product } from 'src/app/akita-store-pagination/models/product.model';

export interface ProductsState extends EntityState<Product> {
  ui: {
    productsInfiniteList: {
      currentPage: number;
      pageSize: number;
      hasReachedLimit: boolean;
      pageIds: ID[];
    };
  };
}
