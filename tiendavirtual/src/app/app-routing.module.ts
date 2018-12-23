import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponentComponent } from './shop-component/shop-component.component';
import { CartComponentComponent } from './cart-component/cart-component.component';

const routes: Routes = [
  { path: 'shop', component: ShopComponentComponent },
  { path: 'cart', component: CartComponentComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
