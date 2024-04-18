import { Product } from "../models/product.models";
import { getPriceWithTax, getTax, getTaxRate } from "./tax";

describe('Tax Utils', () => {
  it('Une taxe additionnelle de 5% est appliquée sur les produits importés, sans exception', () => {
    const product: Product = {
      id: 14,
      productName: "Apple - Fuji",
      price: 4.37,
      quantity: 3,
      isImported: true,
      category: "Food",
      addedQuantity: 0,
      tax: 0,
      priceWithTax: 0
    }
    expect(getTaxRate(product)).toBe(0.05);
    expect(getTax(product)).toBe(0.25);
    expect(getPriceWithTax(product)).toBe(4.62);
  });

  it('les aliments importés ne devraient pas être taxés à 0', () => {
    const product: Product = {
      id: 7,
      productName: "Cheese - Goat",
      price: 3.81,
      quantity: 1,
      isImported: false,
      category: "Food",
      addedQuantity: 0,
      tax: 0,
      priceWithTax: 0
    }
    expect(getTaxRate(product)).toBe(0);
    expect(getTax(product)).toBe(0);
    expect(getPriceWithTax(product)).toBe(3.81);
  });

  it('Une taxe sur la valeur ajoutée de 10% est appliquée sur les livres importés', () => {
    const product: Product = {
      id: 3,
      productName: "The Stranger in the Lifeboat",
      price: 16.38,
      quantity: 7,
      isImported: true,
      category: "Books",
      addedQuantity: 0,
      tax: 0,
      priceWithTax: 0
    }
    expect(getTaxRate(product)).toBe(0.15)
    expect(getTax(product)).toBe(2.5)
    expect(getPriceWithTax(product)).toBe(18.88)
  });

  it('Une taxe sur la valeur ajoutée de 20% est appliquée sur tous les autres produits', () => {
    const product: Product = {
      id: 10,
      productName: "Giorgio Armani Acqua Di Gio 100ml",
      price: 76.32,
      quantity: 8,
      isImported: false,
      category: "Parfum",
      addedQuantity: 0,
      tax: 0,
      priceWithTax: 0
    }
    expect(getTaxRate(product)).toBe(0.2)
    expect(getTax(product)).toBe(15.3)
    expect(getPriceWithTax(product)).toBe(91.62)
  });

  it('Une taxe sur la valeur ajoutée de 25% est appliquée sur tous les autres produits importés', () => {
    const product: Product = {
      id: 10,
      productName: "Giorgio Armani Acqua Di Gio 100ml",
      price: 76.32,
      quantity: 8,
      isImported: true,
      category: "Parfum",
      addedQuantity: 0,
      tax: 0,
      priceWithTax: 0
    }
    expect(getTaxRate(product)).toBe(0.25)
    expect(getTax(product)).toBe(19.1)
  });
})