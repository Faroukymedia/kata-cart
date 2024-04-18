import { Product } from "../../shared/models/product.models";

export interface AddToCart {
    product: Product,
    quantity: number,
  } 