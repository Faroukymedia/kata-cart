import { Pipe, PipeTransform } from '@angular/core';
import { getPriceWithTax } from '../../shared/utils/tax';
import { ProductTax } from '../../shared/models/product.models';

@Pipe({
  name: 'price'
})
export class PriceTaxPipe implements PipeTransform {

  transform(product: ProductTax, quantity = 1): number {
    return getPriceWithTax(product) * quantity;
  }

}
