import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { CartService } from './cart.service';
import { mockBookProduct, mockElectricProduct } from '../../../mocks/mock-cart';

describe('Service: Cart', () => {
  let cartService: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CartService],
    });
  });

  beforeEach(() => {
    cartService = TestBed.inject(CartService);
  });

  it('doit créer le service.', inject([CartService], (service: CartService) => {
    expect(service).toBeTruthy();
  }));

  it('doit ajouter un seule produit au panier', () => {
    expect(cartService.cartProducts.length).toBe(0);
    cartService.addToCart(mockBookProduct);
    expect(cartService.cartProducts.length).toBe(1);
    expect(cartService.cartProducts[0].addedQuantity).toBe(1);
  });
  it('doit ajouter 2 livres au panier', () => {
    cartService.addToCart(mockBookProduct, 2);
    expect(cartService.cartProducts.length).toBe(1);
    expect(cartService.cartProducts[0].addedQuantity).toBe(2);
  });
  it('doit ajouter 2 élément different au panier', () => {
    cartService.addToCart(mockBookProduct);
    cartService.addToCart(mockElectricProduct);
    expect(cartService.cartProducts.length).toBe(2);
  });
  it('doit diminuer la quantité', () => {
    cartService.cartProducts = [
      {
        "id": 1,
        "productName": "",
        "price": 1,
        "quantity": 7,
        "isImported": true,
        "category": "Food",
        "addedQuantity": 4,
        "tax": 0.1,
        "priceWithTax": 1
      }
    ];
    cartService.decreaseQuantityFromCart(cartService.cartProducts[0])
    expect(cartService.cartProducts[0].addedQuantity).toBe(3);
  });

  it('doit supprimer le produit du panier lorsque la quantité ajoutée arrive à 0', () => {
    cartService.cartProducts = [
      {
        "id": 1,
        "productName": "",
        "price": 1,
        "quantity": 7,
        "isImported": true,
        "category": "Food",
        "addedQuantity": 2,
        "tax": 0.1,
        "priceWithTax": 1
      }
    ];
    cartService.decreaseQuantityFromCart(cartService.cartProducts[0])
    cartService.decreaseQuantityFromCart(cartService.cartProducts[0])
    expect(cartService.cartProducts.length).toBe(0);
  });

  it('devrait supprimer le produit du panier', () => {
    cartService.cartProducts = [
      {
        "id": 1,
        "productName": "",
        "price": 1,
        "quantity": 7,
        "isImported": true,
        "category": "Food",
        "addedQuantity": 5,
        "tax": 0.1,
        "priceWithTax": 1
      }
    ];
    cartService.removeProductFromCart(cartService.cartProducts[0])
    expect(cartService.cartProducts.length).toBe(0);
  });
});
