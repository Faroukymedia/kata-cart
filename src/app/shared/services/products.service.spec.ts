/* tslint:disable:no-unused-variable */
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ProductsService } from './products.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Service: Products', () => {
  let service: ProductsService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService]
    });
  });

  beforeEach(() => {
    service= TestBed.inject(ProductsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('doit initialiser les produits', fakeAsync(() => {
    const req = httpTestingController.expectOne(service.productsPATH);
    req.flush([
      {
        "id": 1,
        "productName": "",
        "price": 1,
        "quantity": 7,
        "isImported": true,
        "category": "Food",
      }
    ]);
    service.initProducts();
    tick();
    expect(req.request.method).toEqual("GET");
    expect(service.products.length).toBe(1);
  }));
});
