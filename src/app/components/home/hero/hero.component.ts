import { ProductService } from './../../../services/product.service';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import type { ProductItems } from '../../../models/product-items';

@Component({
  selector: 'app-hero',
  imports: [],
  template: `
    <p>hero works!</p>

    <div>
      @for (product of products(); track productsTrack) {
        <div>{{ product.name }}</div>
      } @empty {
        <div>Pas de produits</div>
      }
    </div>
  `,
  styles: '',
})
export class HeroComponent {
  private readonly productService = inject(ProductService);
  readonly products = toSignal(this.productService.getAllProducts());

  readonly productsTrack = (index: number, product: ProductItems) => product.id;
}
