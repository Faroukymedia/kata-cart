import { mockProducts } from "../../../mocks/mock-products";
import { Product } from "../../shared/models/product.models";
import { FilterProductsPipe } from "./filter-products.pipe";

describe('Pipe: filter', () => {
  it('doit créer une instance', () => {
    const pipe = new FilterProductsPipe();
    expect(pipe).toBeTruthy();
  });
  it('doit renvoyer un tableau vide lorsque les produits ne sont pas définis', () => {
    const pipe = new FilterProductsPipe();
    const products = undefined;
    const result = pipe.transform(products as unknown as Product[], null)
    expect(result.length).toBe(0);
  });

  it('doit retourner tous les produits lorsque la category n\'est pas selectionné', () => {
    const pipe = new FilterProductsPipe();
    const result = pipe.transform(mockProducts, null)
    expect(result.length).toBe(mockProducts.length);
  })

  it('doit retourner les produits avec la catégorie Medecine', () => {
    const pipe = new FilterProductsPipe();
    const result = pipe.transform(mockProducts, "Medecine")
    expect(result.length).toBe(2);
    expect(result[0].category).toBe("Medecine");
  });
});
