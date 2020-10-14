import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../../services/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  searchText = '';
  tempProductList = [];

  constructor(private productListService: ProductListService) {}

  ngOnInit(): void {
    this.productListService.getProductList().subscribe(
      (data) => {
        this.tempProductList = data;
      },
      (error) => {
        console.log('error');
      }
    );
  }

  getProductList(args) {}

  filterProductList(args) {
    let val = this.searchText;
    this.productListService
      .filterProductList(val)
      .then((data) => {
        this.tempProductList = data;
      })
      .catch((err) => console.log(err));
  }
}
