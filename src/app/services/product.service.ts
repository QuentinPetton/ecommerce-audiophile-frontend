import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import type { ProductItems } from '../models/product-items';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  getAllProducts() {
    console.log('produits');
    console.log(this.http.get<ProductItems[]>(`${this.apiUrl}/products`));
    console.log('API URL utilisée :', this.apiUrl);

    return this.http.get<ProductItems[]>(`${this.apiUrl}/products`);
  }
  getProductBySlug(slug: string) {
    return this.http.get<ProductItems>(`${this.apiUrl}/products/${slug}`);
  }
}
