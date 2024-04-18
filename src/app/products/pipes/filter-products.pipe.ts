import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../shared/models/product.models';

@Pipe({
  name: 'filter'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: Product[], category: string | null): Product[] {
    if (!products) return [];
    if (!category) return products;
    return products.filter(product => product.category?.toLowerCase() === category?.toLowerCase())
  }
}
