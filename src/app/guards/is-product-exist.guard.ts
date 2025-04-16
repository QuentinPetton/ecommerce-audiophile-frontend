import type { CanActivateFn } from '@angular/router';
import { ProductService } from '../services/product.service';
import { inject } from '@angular/core';
import { catchError, map, of } from 'rxjs';

export const isProductExistGuard: CanActivateFn = (route, state) => {
  const slug = route.paramMap.get('slug');
  const productService = inject(ProductService);

  if (!slug) {
    return false;
  }

  return productService.getProductBySlug(slug).pipe(
    map(() => true),
    catchError(() => of(false)),
  );
};
