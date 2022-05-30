import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './Component/cart/cart.component';
import { ConfirmationComponent } from './Component/confirmation/confirmation.component';
import { ProductItemComponent } from './Component/product-item/product-item.component';
import { ProductDetailsComponent } from './Component/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './Component/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ConfirmationComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
