export interface Product {
  id: string;
  image: string;
  name: string;
  price: string;
  original_price?: string;
  is_new: boolean;
  is_discounted: boolean;
  discount_percentage: string | null;
  rating: number;
  size: string;
  color: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
