export type Category = string;

export interface Product {
  id: number;
  title: string;
  price: number;
  category: Category;
  thumbnail: string;
  description?: string;
  brand?: string;
  rating?: number;
  stock?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface DummyJSONResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}