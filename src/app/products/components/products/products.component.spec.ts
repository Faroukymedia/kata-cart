import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { CartService } from '../../../shared/services/cart.service';
import { mockCartProducts } from '../../../../mocks/mock-cart';
import { of } from 'rxjs';
import { mockProducts } from '../../../../mocks/mock-products';
import { ProductComponent } from '../product/product.component';
import { UniqueCategoriesPipe } from '../../pipes/unique-categories.pipe';
import { FilterProductsPipe } from '../../pipes/filter-products.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CartComponent } from '../../../cart/components/cart/cart.component';
import { ProductsService } from '../../../shared/services/products.service';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { PriceTaxPipe } from '../../pipes/price-tax.pipe';
describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let cartService: CartService;
  let location: Location;
  const cartStub = {
    cartProducts$: of([mockCartProducts]),
    addToCart: () => { }
  };
  const productsStub = {
    products$: of(mockProducts)
  };
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductsComponent,
        ProductComponent,
        UniqueCategoriesPipe,
        FilterProductsPipe,
        PriceTaxPipe
      ],
      imports: [
        RouterModule.forRoot([
          { path: 'cart', component: CartComponent }
        ]),
        HttpClientModule,
        NgSelectModule,
        FormsModule,
        SharedModule
      ],
      providers: [
        Location,
        {
          provide: CartService,
          useValue: cartStub
        },
        {
          provide: ProductsService,
          useValue: productsStub
        },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    location = TestBed.inject(Location);
    cartService = TestBed.inject(CartService);
    fixture.detectChanges();
  });

  it('doit créer le composant', () => {
    expect(component).toBeTruthy();
  });

  it('doit appeler la fonction addToCart lorsque le composant dispatch l\'event addToCartEvent', () => {
    spyOn(component, 'addToCart');
    const product = fixture.debugElement.query(By.css('app-product'));
    product.nativeElement.dispatchEvent(new Event('addToCartEvent'));
    expect(component.addToCart).toHaveBeenCalled();
  });

  it('doit appeler le service cartService on addToCart', () => {
    const addToCart = spyOn(cartService, "addToCart");
    component.addToCart({
      product: mockProducts[0],
      quantity: 1
    })
    expect(addToCart).toHaveBeenCalled();
  });

  it('doit afficher un compteur d\'articles rajoutés', () => {
    const counter = fixture.debugElement.query(By.css('.products-counter'));
    expect(counter).toBeTruthy();
  });

  it('doit rediriger vers la page panier au click sur le lien panier', fakeAsync(() => {
    const anchor = fixture.debugElement.query(By.css('.link-cart'));
    anchor.nativeElement.click();
    tick();
    expect(location.path()).toBe('/cart');
  }));
});
