import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductsService } from './products.service';
import { Product } from '../models/product.models';
import { getPriceWithTax, getTax } from '../utils/tax';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cartProducts = new BehaviorSubject<Product[]>([]);
  readonly cartProducts$: Observable<Product[]> = this._cartProducts.asObservable();

  get cartProducts(): Product[] {
    return this._cartProducts.value;
  }

  set cartProducts(products: Product[]) {
    this._cartProducts.next(products);
  }

  constructor(
    private productsService: ProductsService
  ) { }

  addToCart(product: Product, quantity = 1): void {
    const index = this.cartProducts.findIndex(item => item.id === product.id);
    if (index !== -1) {
      this.cartProducts[index].addedQuantity += quantity;
      this.cartProducts[index].quantity -= quantity;
      product.quantity -= quantity;
    } else {
      product.tax = getTax(product);
      product.priceWithTax = getPriceWithTax(product);
      product.addedQuantity = quantity;
      product.quantity -= quantity;
      this.cartProducts.push({ ...product });
    }
  }

  decreaseQuantityFromCart(product: Product): void {
    const cartProductIndex = this.cartProducts.findIndex(item => product.id === item.id);
   
    if (cartProductIndex != -1) {
      const cartProduct = this.cartProducts[cartProductIndex];
      if (cartProduct.addedQuantity > 0) {
        cartProduct.addedQuantity--;
        cartProduct.quantity++;
      }
      if (cartProduct.addedQuantity === 0) {
        this.cartProducts.splice(cartProductIndex, 1);
      }
      this.cartProducts = [...this.cartProducts];
      const targetProduct = this.productsService.products.find(item => product.id === item.id);
      targetProduct && targetProduct.quantity++;
    }
  }

  increaseQuantityFromCart(product: Product): void {
    const cartProductIndex = this.cartProducts.findIndex(item => product.id === item.id);
    const cartProduct = this.cartProducts[cartProductIndex];
    const targetProduct = this.productsService.products.find(item => product.id === item.id)

    if (cartProductIndex != -1) {
      if (targetProduct && targetProduct.quantity > 0) {
        cartProduct.addedQuantity++;
        cartProduct.quantity--;
        targetProduct.quantity--;
      }
      this.cartProducts = [...this.cartProducts];
    }
  }

  removeProductFromCart(product: Product): void {
    const targetProduct = this.productsService.products.find(item => product.id === item.id)
    this.cartProducts = this.cartProducts.filter(item => item.id != product.id);
    if (targetProduct) {
      targetProduct.quantity = targetProduct?.quantity + product.addedQuantity;
    }
  }

}
