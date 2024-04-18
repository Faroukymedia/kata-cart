export interface Product {
    id: number,
    productName: string,
    price: number,
    quantity: number,
    isImported: boolean,
    category: string,
    addedQuantity: number;
    tax: number;
    priceWithTax: number;
}

export type ProductTax = Pick<Product, "category" | "isImported" | "price"> 