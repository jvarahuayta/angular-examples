import { ID } from '@datorama/akita';

export interface Product {
  id?: ID;
  name?: string;
  portraitUrl?: string;
  imagesUrls?: string[];
  price?: string;
}
