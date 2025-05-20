import type { ProductImages } from './product-images';
import type { ProductItems } from './product-items';
export interface CartItems {
  id: ProductItems['id'];
  slug: ProductItems['slug'];
  price: ProductItems['price'];
  image: ProductImages['imageMobile'];
  quantity: number;
}
