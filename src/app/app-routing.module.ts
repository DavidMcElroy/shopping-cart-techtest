import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
  path: 'cart',
  component: CartComponent,
},
{
  path: 'products',
  component: ProductListComponent,
},
{
  path: '**',
  redirectTo: 'products',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
