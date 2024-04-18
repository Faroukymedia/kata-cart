import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { RouterModule } from '@angular/router';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './components/product/product.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { UniqueCategoriesPipe } from './pipes/unique-categories.pipe';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { PriceTaxPipe } from './pipes/price-tax.pipe';


@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent,
    UniqueCategoriesPipe,
    FilterProductsPipe,
    PriceTaxPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductsRoutingModule,
    FormsModule,
    NgSelectModule
  ]
})
export class ProductsModule { }
