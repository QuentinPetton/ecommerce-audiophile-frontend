import type { ProductIncludes } from './product-includes';
import type { ProductImages } from './product-images';
import type { Category } from './category';
import type { ProductOthers } from './product-others';

export interface ProductItems {
  id: number;
  slug: string;
  name: string;
  category: Category;
  new: boolean;
  price: number;
  description: string;
  features: string;
  productImages: ProductImages[];
  productIncludes: ProductIncludes[];
  others: ProductOthers[];
}
