import { CALCULATOR_BASE, GENERAL_TAX, IMPORT_ADDITIONAL_TAX } from "../../constants";
import { CategoryTaxEnum } from "../enums/category-tax.enum";
import { ProductTax } from "../models/product.models";

const taxRate = new Map<string, number>([
  [CategoryTaxEnum.FOOD, 0],
  [CategoryTaxEnum.MEDICINE, 0],
  [CategoryTaxEnum.BOOKS, 10]
])

const roundUpToNearestFiveCents = (priceWithoutTax: number): number => {
  return +(Math.ceil(priceWithoutTax * 20) / 20).toFixed(2);
}

export const getTax = (product: ProductTax): number => {
  if (product.price && product.category) {
    const tax = product.price * getTaxRate(product);
    return roundUpToNearestFiveCents(tax);
  }
  return 0;
}

export const getPriceWithTax = (product: ProductTax): number => {
  if (product.price && product.category) {
    return (product.price * CALCULATOR_BASE + getTax(product) * CALCULATOR_BASE) / CALCULATOR_BASE;
  }
  return 0;
}

export const getTaxRate = (product: ProductTax): number => {
  if (product.price && product.category) {
    let rate = GENERAL_TAX;
    if (taxRate.has(product.category)) {
      rate = taxRate.get(product.category) as number;
    }
    if (product.isImported) {
      rate += IMPORT_ADDITIONAL_TAX;
    }
    return rate / 100;
  }
  return 0;
}
