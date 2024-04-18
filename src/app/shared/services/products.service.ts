import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  readonly productsPATH = environment.apiBaseUrl + environment.productsPath;
  private _products = new BehaviorSubject<Product[]>([]);
  readonly products$: Observable<Product[]> = this._products.asObservable();

  get products(): Product[] {
    return this._products.value;
  }

  set products(products: Product[]) {
    this._products.next(products);
  }

  constructor(
    private httpClient: HttpClient
  ) { 
    this.initProducts();
  }

  initProducts() {
    this.httpClient.get<Product[]>(this.productsPATH).subscribe(products => this.products = products);
  }
}
