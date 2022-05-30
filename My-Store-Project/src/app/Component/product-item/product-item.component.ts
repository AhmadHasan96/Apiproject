import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Product } from 'src/app/Models/Product';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
@Input() product: Product;
@Output() addProduct: EventEmitter<Product> = new EventEmitter();

howManyItems: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
howManyItem: number = 1;
  constructor() {
    this.product = {
      id: 0,
      name: "",
      price: 0,
      url: "",
      description: "",
      howManyItem: 0
    }
   // this.howManyItem= 1;
   }

  ngOnInit(): void {
  }
  addToCart(product: Product) {
     product.howManyItem = this.howManyItem;
     this.addProduct.emit(product);
     alert(`Added to your cart: ${this.product.howManyItem} x ${this.product.name} `);
     this.howManyItem = 1;
   }

}
