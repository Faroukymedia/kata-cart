import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { HttpClientModule } from '@angular/common/http';
import { TotalPricePipe } from '../../pipes/total-price.pipe';
import { ProductsComponent } from '../../../products/components/products/products.component';
import { RouterModule } from '@angular/router';
import { CartService } from '../../../shared/services/cart.service';
import { mockCartProducts } from '../../../../mocks/mock-cart';
import { of } from 'rxjs';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';


describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let cartService: CartService;
  let location: Location
  const cartProductsStub = {
    cartProducts$: of([mockCartProducts]),
    increaseQuantityFromCart: () => { },
    decreaseQuantityFromCart: () => { },
    removeProductFromCart: () => { },
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent, TotalPricePipe],
      imports: [
        HttpClientModule,
        RouterModule.forRoot([
          {path: 'products', component: ProductsComponent}
        ]),
      ],
      providers: [{
        provide: CartService,
        useValue: cartProductsStub
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    location = TestBed.inject(Location);
    cartService = TestBed.inject(CartService);
    fixture.detectChanges();
  });

  it('doit créer le composant', () => {
    expect(component).toBeTruthy();
  });

  it('doit afficher la liste des produits', () => {
    const productTableDom = fixture.debugElement.query(By.css('.products-container'));
    expect(productTableDom).toBeTruthy();
  });
  
  it('doit afficher le message Empty cart', () => {
    component.cartProducts$ = of([]);
    fixture.detectChanges();
    const messageDom = fixture.debugElement.query(By.css('.empty-cart'));
    expect(messageDom).toBeTruthy();
    expect(messageDom.nativeElement.innerText).toBe("Empty cart");
  });
  it('doit appeler la fonction increaseQuantity ', () => {
    spyOn(component, "increaseQuantity");
    const btn = fixture.debugElement.query(By.css('.list-products .btn-add'));
    btn.nativeElement.click();
    expect(component.increaseQuantity).toHaveBeenCalled();
  });

  it('doit appeler la fonction decreaseQuantity ', () => {
    spyOn(component, "decreaseQuantity");
    const btn = fixture.debugElement.query(By.css('.list-products .btn-remove'));
    btn.nativeElement.click();
    expect(component.decreaseQuantity).toHaveBeenCalled();
  });

  it('doit appeler la fonction removeProduct ', () => {
    spyOn(component, "removeProduct");
    const btn = fixture.debugElement.query(By.css('#removeProduct'));
    btn.nativeElement.click();
    expect(component.removeProduct).toHaveBeenCalled();
  });

  it('doit appeler la fonction increaseQuantityFromCart du service cartService', () => {
    const increaseQuantityFromCart = spyOn(cartService, "increaseQuantityFromCart");
    component.increaseQuantity(mockCartProducts[0])
    expect(increaseQuantityFromCart).toHaveBeenCalled();
  });

  it('doit appeler la fonction decreaseQuantityFromCart du service cartService', () => {
    const decreaseQuantityFromCart = spyOn(cartService, "decreaseQuantityFromCart");
    component.decreaseQuantity(mockCartProducts[0])
    expect(decreaseQuantityFromCart).toHaveBeenCalled();
  });

  it('doit appeler la fonction removeProductFromCart du service cartService', () => {
    const removeProductFromCart = spyOn(cartService, "removeProductFromCart");
    component.removeProduct(mockCartProducts[0])
    expect(removeProductFromCart).toHaveBeenCalled();
  });

  it(`doit aller à la page products au click sur le lien home`, fakeAsync(() => {
    const button = fixture.debugElement.query(By.css('.btn-back'));
    button.nativeElement.click();
    tick();
    expect(location.path()).toBe('/products');

  }));


});
