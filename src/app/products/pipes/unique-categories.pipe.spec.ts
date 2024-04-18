import { mockProducts } from '../../../mocks/mock-products';
import { UniqueCategoriesPipe } from './unique-categories.pipe';

describe('Pipe: UniqueCategories', () => {
  it('doit filter les categories', () => {
    const pipe = new UniqueCategoriesPipe();
    const categories = pipe.transform(mockProducts);
    expect(categories.length).toBe(3);
  });
  it('doit retourner une seule valeur', () => {
    const pipe = new UniqueCategoriesPipe();
    const categories = pipe.transform(mockProducts);
    expect(categories.filter(category => category === "Medecine").length).toBe(1);
  });
});

