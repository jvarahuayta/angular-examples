import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ProductsMapper } from './mappers/product.mapper';
import { ID } from '@datorama/akita';

const getProductsForGalleryQuery = gql`
  query {
    productos {
      id
      nombre
      precio
      portada {
        url
      }
    }
  }
`;

const getProductDetailQuery = gql`
  query productById($id: ID!) {
    producto(id: $id) {
      id
      imagenes {
        url
      }
    }
  }
`;

@Injectable()
export class ProductsApi {
  constructor(private apollo: Apollo) {}

  getProducts() {
    return this.apollo
      .query<{ productos: any[] }>({
        query: getProductsForGalleryQuery,
      })
      .pipe(
        map(({ data }) =>
          data.productos.map((be) => ProductsMapper.mapFromBackend(be))
        )
      );
  }

  getProductDetail(productId: ID) {
    return this.apollo
      .query<{ producto: any }>({
        query: getProductDetailQuery,
        variables: {
          id: productId,
        },
      })
      .pipe(map(({ data }) => ProductsMapper.mapFromBackend(data.producto)));
  }
}
