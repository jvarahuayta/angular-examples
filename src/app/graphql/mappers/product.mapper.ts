import { Product } from '../models/product.model';

export class ProductsMapper {
  static mapFromBackend(beEntity: any): Product {
    return {
      id: beEntity.id,
      name: beEntity.nombre,
      portraitUrl: `http://localhost:1337${beEntity.portada?.url}`,
      price: beEntity.precio,
      imagesUrls: (beEntity.imagenes || []).map(
        (img) => `http://localhost:1337${img.url}`
      ),
    };
  }
}
