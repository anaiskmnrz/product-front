import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/service/product.service';
import { HttpErrorResponse } from '@angular/common/http';
import Product from 'app/model/Product';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss'],
})
export class ProductsAdminComponent implements OnInit {

  products = [];
  selectedProducts: Product[] | null;
  messageError: string;
  product: Product;
  submitted: boolean = false;
  productDialog: boolean = false;

  constructor(private productService : ProductService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.getProducts();
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

   deleteSelectedProducts() {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete the selected products?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.products = this.products.filter((val) => !this.selectedProducts?.includes(val));
            for (let product of this.selectedProducts) {
              this.productService.deleteProduct(product.id).subscribe();
            }
            this.selectedProducts = null;
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
        }
    });
  }

  openNew() {
    this.product = new Product();
    this.submitted = false;
    this.productDialog = true;
}

  postProduct() {
    this.submitted = true; 

    if (this.product.name && this.product.code && this.product.description && this.product.inventoryStatus && this.product.category
      && this.product.price && this.product.quantity) {
      this.productService.postProduct(this.product.name, this.product.code, this.product.description, this.product.price, 
        this.product.category, this.product.quantity, this.product.inventoryStatus, this.product.image ? this.product.image : null, 
        this.product.rating ? this.product.rating : null).subscribe();
    
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
    
        this.products.push(this.product);
        this.productDialog = false;
        this.product = {};
    }
      
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }


}
