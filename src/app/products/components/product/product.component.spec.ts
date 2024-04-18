import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../shared/shared.module';
import { mockProduct } from '../../../../mocks/mock-products';
import { By } from '@angular/platform-browser';
import { PriceTaxPipe } from '../../pipes/price-tax.pipe';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgSelectModule, FormsModule, SharedModule],
      declarations: [ProductComponent, PriceTaxPipe]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('doit créer le composant', () => {
    expect(component).toBeTruthy();
  });

  it('doit afficher la quantité disponible', () => {
    component.product = mockProduct;
    component.product.quantity = 20;
    fixture.detectChanges();
    const btnQuantity = fixture.debugElement.query(By.css('.btn-quantity'));
    expect(btnQuantity).toBeTruthy();
    expect(btnQuantity.nativeElement.innerHTML).toContain('20');
  });

  it('le bouton ajouter doit être active lorsque la quantité est supérieure à 0', () => {
    component.product = mockProduct;
    fixture.detectChanges();
    const addBtn = fixture.debugElement.query(By.css('.btn-add'));
    expect(addBtn.nativeElement.innerHTML).toContain('Add');
  });

  it('le bouton ajouter ne doit pas être active lorsque la quantité est égal à 0', () => {
    component.product = mockProduct;
    component.product.quantity = 0;
    fixture.detectChanges();
    const addBtn = fixture.debugElement.query(By.css('.btn-add'));
    expect(addBtn.nativeElement.disabled).toBeTruthy();
  });

  it('doit afficher le text not available lorsque la quantité est égal à 0', () => {
    component.product = mockProduct;
    component.product.quantity = 0;
    fixture.detectChanges();
    const messageDom = fixture.debugElement.query(By.css('.not-available'));
    expect(messageDom.nativeElement.innerHTML).toContain('Not available');
  });

  it('doit appeler la fonction addToCart', () => {
    component.product = mockProduct;
    component.product.quantity = 20;
    fixture.detectChanges();
    spyOn(component, "addToCart");
    const addBtn = fixture.debugElement.query(By.css('.btn-add'));
    addBtn.nativeElement.click();
    expect(component.addToCart).toHaveBeenCalled();

  });

  it('doit envoyer un event d\'ajout au panier avec la quantité souhaitée au click sur le bouton add', () => {
    component.product = mockProduct;
    component.product.quantity = 20;
    component.quantity = 5;
    fixture.detectChanges();
    spyOn(component.addToCartEvent, 'emit');
    const addBtn = fixture.debugElement.query(By.css('.btn-add'));
    addBtn.nativeElement.dispatchEvent(new Event('click'));
    expect(component.addToCartEvent.emit).toHaveBeenCalledWith({
      product: mockProduct,
      quantity: 5
    });
  })
});
