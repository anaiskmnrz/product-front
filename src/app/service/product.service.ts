import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {environment} from '../environment/environment';
import Product from 'app/model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.backendUrl}products`);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.backendUrl}products/${id}`);
  }

  deleteProduct(id: number): Observable<string> {
    return this.http.delete<string>(`${environment.backendUrl}products/${id}`);
  }

  postProduct(name: string, code: string, description: string, price: number, category: string, quantity: number, 
    inventoryStatus: string, image?: string, rating?: number) {
      return this.http.post<Product>(`${environment.backendUrl}products`,
      {
        code: `${code}`,
        name: `${name}`,
        description: `${description}`,
        image: `${image}`,
        price: `${price}`,
        category: `${category}`,
        quantity: `${quantity}`,
        inventoryStatus: `${inventoryStatus}`,
        rating: `${rating}`
      });
  
    }



}
