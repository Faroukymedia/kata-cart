import { Component } from '@angular/core';
import { ProductsService } from '../../../shared/services/products.service';
import { CartService } from '../../../shared/services/cart.service';
import { AddToCart } from '../../models/add-cart.models';
import { Observable } from 'rxjs';
import { Product } from '../../../shared/models/product.models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products$: Observable<Product[]>;
  cartProducts$: Observable<Product[]>;
  selectedCategory: string | null = null ;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) { 
    this.products$ = this.productsService.products$;
    this.cartProducts$ = this.cartService.cartProducts$;
  }

  addToCart(event: AddToCart) {
    this.cartService.addToCart(event.product, event.quantity);
  }
}
