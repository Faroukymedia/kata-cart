import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../shared/models/product.models';

@Pipe({
  name: 'uniqueCategories'
})
export class UniqueCategoriesPipe implements PipeTransform {

  transform(products: Product[]): string[] {
    return [...new Set(products.map(item => item.category))];
  }
}
