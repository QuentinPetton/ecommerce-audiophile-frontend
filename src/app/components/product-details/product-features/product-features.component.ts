import { Component, computed, input } from '@angular/core';
import type { ProductItems } from '../../../models/product-items';

@Component({
  selector: 'app-product-features',
  imports: [],
  template: `
    <section class="mx-8 mb-8">
      <h2 class="text-xl font-bold mb-8">Features</h2>
      <p class="opacity-50">{{ product().features }}</p>

      <h2 class="text-xl font-bold mt-16 mb-6">In the box</h2>
      <ul>
        @for (product of productIncludes(); track $index) {
          <li class="my-2">
            <span class="text-orange mr-4">{{ product.quantity }}x</span>
            <span class="opacity-50">
              {{ product.item }}
            </span>
          </li>
        }
      </ul>
    </section>
  `,
  styles: '',
})
export class ProductFeaturesComponent {
  readonly productSignal = input.required<ProductItems>();
  readonly product = computed(() => this.productSignal());
  readonly productIncludes = computed(() => {
    return this.product().productIncludes;
  });
}
