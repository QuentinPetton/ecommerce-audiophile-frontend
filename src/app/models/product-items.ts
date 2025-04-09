import type { ProductIncludes } from './product-includes';
import type { ProductImages } from './product-images';

export interface ProductItems {
  id: number;
  slug: string;
  name: string;
  category: string;
  isNew: boolean;
  price: number;
  description: string;
  features: string;
  productImages: ProductImages[];
  includes: ProductIncludes[];
}
