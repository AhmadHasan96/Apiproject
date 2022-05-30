import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Models/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  product! : Product;
  product_url = "assets/data.json";
  productList! : Product[];

  constructor(private http: HttpClient) { }

  getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(this.product_url);
  }

  setProducts(productList : Product[]) {
    this.productList = productList;
  }


}