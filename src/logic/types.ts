export interface Product {
  id: number;
  product_image: string;
  product_name: string;
  product_price: string;
  product_discount: string | null;
  product_rate: string;
  isAvailable: boolean;
  onAddToCart?: () => void;
  quantity?: number | null;
}
