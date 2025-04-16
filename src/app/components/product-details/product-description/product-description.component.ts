import { Component, Input } from '@angular/core';
import type { ProductItems } from '../../../models/product-items';

@Component({
  selector: 'app-product-description',
  imports: [],
  template: `
    <p>product-description works!</p>
    <p>{{ product.slug }}</p>
  `,
  styles: '',
})
export class ProductDescriptionComponent {
  @Input() product!: ProductItems;
}
