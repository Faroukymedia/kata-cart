import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../../shared/services/cart.service';
import { Product } from '../../../shared/models/product.models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartProducts$: Observable<Product[]>;

  constructor(
    private cartService: CartService
  ) {
    this.cartProducts$ = this.cartService.cartProducts$;
  }

  increaseQuantity(product: Product) {
    this.cartService.increaseQuantityFromCart(product);
  }

  decreaseQuantity(product: Product) {
    this.cartService.decreaseQuantityFromCart(product);
  }

  removeProduct(product: Product) {
    this.cartService.removeProductFromCart(product);
  }
}
