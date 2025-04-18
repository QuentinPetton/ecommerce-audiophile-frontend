import { Component, computed, input } from '@angular/core';
import type { ProductItems } from '../../../models/product-items';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-product-features',
  imports: [UpperCasePipe],
  template: `
    @if (product()) {
      <section class="mx-8 mb-8 md:grid md:grid-cols-2">
        <h2 class="text-xl font-bold mb-8 md:text-3xl md:col-span-2">
          {{ 'Features' | uppercase }}
        </h2>
        <p class="opacity-50 md:col-span-2">{{ product().features }}</p>

        <h2 class="text-xl font-bold mt-16 mb-6 md:text-3xl md:mt-24">
          {{ 'In the box' | uppercase }}
        </h2>
        <ul class="mb-16 md:mt-24">
          @for (product of productIncludes(); track $index) {
            <li class="my-2">
              <span class="text-orange mr-4">{{ product.quantity }}x</span>
              <span class="opacity-50">
                {{ product.item }}
              </span>
            </li>
          }
        </ul>
        <div class="md:grid md:grid-cols-5 md:col-span-2 md:gap-4">
          @for (image of productImageGallery(); track $index) {
            <div
              class=" col-span-2 {{
                $index === 2 ? 'md:col-start-3 md:col-span-3 md:row-start-1 md:row-span-2 ' : ''
              }}"
            >
              <picture>
                <source [attr.srcset]="image.imageDesktop" media="(min-width: 1024px)" />
                <source [attr.srcset]="image.imageTablet" media="(min-width: 768px)" />
                <img
                  class="rounded-lg mb-4 object-cover h-full"
                  [src]="image.imageMobile"
                  alt="image of {{ product().name }}"
                />
              </picture>
            </div>
          }
        </div>
      </section>
    }
  `,
  styles: '',
})
export class ProductFeaturesComponent {
  readonly productSignal = input.required<ProductItems>();
  readonly product = computed(() => this.productSignal());
  readonly productIncludes = computed(() => {
    return this.product().productIncludes;
  });
  readonly productImageGallery = computed(() => {
    return this.product().productImages.filter((img) =>
      ['gallery_first', 'gallery_second', 'gallery_third'].includes(img.type),
    );
  });
}
