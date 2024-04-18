import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../shared/models/product.models';
import { CALCULATOR_BASE } from '../../constants';

@Pipe({
  name: 'totalPrice'
})
export class TotalPricePipe implements PipeTransform {

  transform(products: Product[], total: string): number {
    const totalPrice = products.reduce(
      (accumulator, product) => accumulator + this.getPrice(product, total) * CALCULATOR_BASE * product.addedQuantity,
      0
    ) ;
    return totalPrice / CALCULATOR_BASE;
  }

  getPrice(product: Product, total: string): number {
    if (total === 'price') {
      return product.priceWithTax;
    } else {
      return product.tax;
    }
  }
}
