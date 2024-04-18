import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { RouterModule } from '@angular/router';
import { CartRoutingModule } from './cart-routing.module';
import { TotalPricePipe } from './pipes/total-price.pipe';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CartRoutingModule
  ],
  declarations: [CartComponent, TotalPricePipe],
})
export class CartModule { }
