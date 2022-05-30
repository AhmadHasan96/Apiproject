import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './Component/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './Component/product-list/product-list.component';

const routes: Routes = [
  {path: '', component: ProductListComponent},
  { path : 'productDetails', component : ProductDetailsComponent},
  { path : 'product/:id', component : ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
