import { mockCartProducts } from "../../../mocks/mock-cart";
import { TotalPricePipe } from "./total-price.pipe";

describe('Pipe: TotalPrice', () => {

    it('doit retourner 0 quand le panier est vide', () => {
      const pipe = new TotalPricePipe();
      const total = pipe.transform([], 'price'); 
      expect(total).toBe(0);
    });

    it('doit retourner le prix total TTC', () => {
      const pipe = new TotalPricePipe();
      const total = pipe.transform(mockCartProducts, 'price'); 
      expect(total).toBe(9);
    });

    it('doit retourner le prix total HT', () => {
        const pipe = new TotalPricePipe();
        const total = pipe.transform(mockCartProducts, 'price'); 
        expect(total).toBe(9);
      });
  
  });