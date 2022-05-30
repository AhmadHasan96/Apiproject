import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductServiceService } from 'src/app/Services/product-service.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
title: string = "Products"
products: Product[] = [];
 
  constructor(
    private ProductServiceService : ProductServiceService,
  ) { }

  ngOnInit(): void {
    this.ProductServiceService.getProducts().subscribe((res) =>{
      for (let num= 0; num<res.length; num++){
        const product = res[num];
        product['howManyItem'] = 1;
      }
      this.products = res;
      this.ProductServiceService.setProducts(res);
    });
    // this.products =[
    //   {
    //     id: 1,
    //     name: "Book",
    //     price: 9.99,
    //     url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    //     description: "You can read it!",
    //     howManyItem:0,       
    //   },
    //   {
    //     id: 2,
    //     name: "Headphones",
    //     price: 249.99,
    //     url: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    //     description: "Listen to stuff!",
    //     howManyItem:0, 
        
    //   },
    //   {
    //     id: 3,
    //     name: "Backpack",
    //     price: 79.99,
    //     url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    //     description: "Carry things around town!",
    //     howManyItem:0,  
    //   },
    //   {
    //     id: 4,
    //     name: "Glasses",
    //     price: 129.99,
    //     url: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    //     description: "Now you can see!",
    //     howManyItem:0 , 
    //   },
    //   {
    //     id: 5,
    //     name: "Cup",
    //     price: 4.99,
    //     url: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    //     description: "Drink anything with it!",
    //     howManyItem:0 , 
    //   },
    //   {
    //     "id": 6,
    //     "name": "Shirt",
    //     "price": 29.99,
    //     "url": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",
    //     "description": "Wear it with style!",
    //     howManyItem:0 , 
    //   }
    // ]

  }

}