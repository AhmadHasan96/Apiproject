import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { CartServiceService } from 'src/app/Services/cart-service.service';
import { ProductServiceService } from 'src/app/Services/product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;
  howManyItem: any = 1;
  howManyItems: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  constructor(
    private route: ActivatedRoute,
    private CartServiceService : CartServiceService,
    private productServiceService : ProductServiceService,
  ) { }

  ngOnInit(): void {
    try{
      this.route.params.subscribe((params) => {
        this.productServiceService.getProducts().subscribe((res) => {
          this.product = res.find(
            (product) => product.id == params["id"]
          ) as Product;
          if (this.product){
            this.product.howManyItem = 1;
          }
        });
      } )
    }catch(error){
      throw new Error("Unable to find product");
    }
  }
  

  AddToCart(product: Product) : void {
    product.howManyItem = this.howManyItem;
    this.CartServiceService.addToCart(product);
    alert(
      `Added to your cart: ${this.product.howManyItem} x ${this.product.name}`
    );
    this.howManyItem = 1;
  }
}
