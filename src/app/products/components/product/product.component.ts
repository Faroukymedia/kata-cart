import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.models';
import { AddToCart } from '../../models/add-cart.models';
import { DEFAUL_QUANTITY } from '../../constants/product.constant';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product: Product | undefined;
  @Output() addToCartEvent = new EventEmitter<AddToCart>();

  quantity = DEFAUL_QUANTITY;

  addToCart(product: Product): void {
    if(product.quantity <= 0) {
      this.quantity = 0;
      return;
    }
    if(product.quantity < this.quantity) {
      this.quantity = product.quantity;
    }
    this.addToCartEvent.emit({
      product,
      quantity: this.quantity
    })
  }

}
