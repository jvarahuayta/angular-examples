import { Product } from '../models/product.model';
import { makeid } from 'src/app/lib/utils/string.util';

const TOTAL_COUNT = 100;

const getProductMock = (): Product => ({
  id: Math.random(),
  name: makeid(10),
  price: Number((Math.random() * 20).toFixed(2))
});

const getProductListMock = (): Product[] => {
  const list = [];
  for (let i = 0; i < TOTAL_COUNT; i++) {
    list.push(getProductMock());
  }
  return list;
};

export const PRODUCTS_MOCK: Product[] = getProductListMock();
