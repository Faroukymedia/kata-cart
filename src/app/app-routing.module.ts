import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { URI_CART, URI_PRODUCTS } from './constants';

const routes: Routes = [
  {
    path: URI_PRODUCTS,
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: URI_CART,
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
  },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
