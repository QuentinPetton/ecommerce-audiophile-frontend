import { Component, computed, input } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import type { ProductItems } from '../../../models/product-items';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-other-product',
  imports: [UpperCasePipe, RouterLink],
  template: `
    @if (productSignal()) {
      <section
        class="text-center mx-8 font-semibold my-16 md:grid md:grid-cols-3 md:gap-4 lg:mx-24"
      >
        <h3 class="mb-6 font-bold text-xl md:col-span-3 md:text-3xl">
          {{ 'You may also like' | uppercase }}
        </h3>
        @for (otherProduct of othersProduct(); track $index) {
          <div class="md:col-span-1 ">
            <picture>
              <source [attr.srcset]="otherProduct.imageDesktop" media="(min-width: 1024px)" />
              <source [attr.srcset]="otherProduct.imageTablet" media="(min-width: 768px)" />
              <img
                class="rounded-lg "
                [src]="otherProduct.imageMobile"
                alt="image of {{ otherProduct.otherName }}"
              />
            </picture>
            <h4 class="text-xl my-6">{{ otherProduct.otherName }}</h4>
            <button
              class="bg-orange px-6 py-4 mb-8 font-normal text-white text-xs tracking-widest hover:bg-orange-light transition cursor-pointer"
            >
              <a [routerLink]="['/product', otherProduct.otherSlug]">
                {{ 'see product' | uppercase }}
              </a>
            </button>
          </div>
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
