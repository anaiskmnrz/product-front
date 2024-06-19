import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/service/product.service';
import { HttpErrorResponse } from '@angular/common/http';
import Product from 'app/model/Product';
import { SelectItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products : Product[];
  messageError: string;
  layout: string = 'grid';

  sortOptions: SelectItem[];
  sortOrder: number;
  sortField: string;

  constructor(private productService : ProductService, private primengConfig : PrimeNGConfig) { }

  ngOnInit(): void {
    this.getProducts();
    this.sortOptions = [
      {label: 'Price High to Low', value: '!price'},
      {label: 'Price Low to High', value: 'price'}
  ];

  this.primengConfig.ripple = true;
  }

  getProducts() {
    this.productService.getProducts()
     .subscribe(
      listeProducts => {
        this.products = listeProducts;
      },
      (err: HttpErrorResponse) => this.messageError = 'Erreur dans le protocole HTTP'
     );
   }

   onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
  }

}
