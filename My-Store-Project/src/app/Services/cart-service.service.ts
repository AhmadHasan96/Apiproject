import { Injectable } from '@angular/core';
import { Product } from '../Models/Product';
import { InfoOfOrder } from '../Models/info-of-order';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  
  items : Product[] = [];
  infoOfOrder! : InfoOfOrder;

  constructor() { }

  addToCart(product : Product) {
    const cartProduct = this.items.find(
      (item) => item.id == product.id
    );
    if (cartProduct?.howManyItem && product?.howManyItem){
      cartProduct.howManyItem += product.howManyItem;
    }else{
      this.items.push(product)
    }
  }

  getCart() : Product[] {
    return this.items;
  }

  setCart(items : Product[]) {
     this.items = items;
  }

  setCartToEmpty() : Product[]{
    this.items = [];
    return this.items;
  }

  setOrderInfo(infoOfOrder : InfoOfOrder) : void{
    this.infoOfOrder = infoOfOrder;
  } 

  getOrderInfo() : InfoOfOrder{
    return this.infoOfOrder;
  }
}
