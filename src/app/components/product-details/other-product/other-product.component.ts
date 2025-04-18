import { Component, computed, input } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import type { ProductItems } from '../../../models/product-items';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-other-product',
  imports: [UpperCasePipe, RouterLink],
  template: `
    @if (productSignal()) {
      <section class="text-center mx-8 font-semibold my-16">
        <h3 class="mb-6 text-xl">{{ 'You may also like' | uppercase }}</h3>
        @for (otherProduct of othersProduct(); track $index) {
          <img [src]="otherProduct.imageMobile" alt="image of {{ otherProduct.otherName }}" />
          <h4 class="text-xl my-6">{{ otherProduct.otherName }}</h4>
          <button
            class="bg-orange px-3 py-2 mb-8 font-normal text-white text-xs tracking-widest hover:bg-orange-light transition cursor-pointer"
          >
            <a [routerLink]="['/product', otherProduct.otherSlug]">
              {{ 'see product' | uppercase }}
            </a>
          </button>
        }
      </section>
    }
  `,
  styles: '',
})
export class OtherProductComponent {
  readonly productSignal = input.required<ProductItems>();
  readonly othersProduct = computed(() => this.productSignal().others);
}
