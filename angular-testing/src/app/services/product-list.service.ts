import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  productList = PRODUCT_LIST;
  constructor() {}

  getProductList() {
    return of(this.productList);
  }

  filterProductList(searchString): Promise<any> {
    return of(
      this.productList.filter(
        (product) =>
          product.title
            .toLocaleLowerCase()
            .indexOf(searchString.toLocaleLowerCase()) > -1
      )
    ).toPromise();
  }
}

export const PRODUCT_LIST = [
  {
    title: 'Brown Eggs',
    price: 28.1,
  },
  {
    title: 'Strawberry',
    price: 16.5,
  },
  {
    title: 'Milk',
    price: 5.36,
  },
  {
    title: 'Brown Eggs 1',
    price: 26.5,
  },
  {
    title: 'Brown Eggs 2',
    price: 45.1,
  },
  {
    title: 'Brown Eggs 3',
    price: 28.1,
  },
  {
    title: 'Brown Eggs 4',
    price: 28.1,
  },
  {
    title: 'Brown Eggs 5',
    price: 28.1,
  },
  {
    title: 'Brown Eggs 6',
    price: 28.1,
  },
  {
    title: 'Brown Eggs 7',
    price: 28.1,
  },
  {
    title: 'Brown Eggs 8',
    price: 28.1,
  },
  {
    title: 'Brown Eggs 9',
    price: 28.1,
  },
  {
    title: 'Brown Eggs 10',
    price: 28.1,
  },
  {
    title: 'Brown Eggs 11',
    price: 28.1,
  },
  {
    title: 'Brown Eggs 12',
    price: 28.1,
  },
  {
    title: 'Brown Eggs 13',
    price: 28.1,
  },
  {
    title: 'Brown Eggs 14',
    price: 28.1,
  },
  {
    title: 'Brown Eggs 15',
    price: 28.1,
  },
];
