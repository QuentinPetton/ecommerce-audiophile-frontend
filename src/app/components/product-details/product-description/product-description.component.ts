import { Component, computed, input } from '@angular/core';
import type { ProductItems } from '../../../models/product-items';

@Component({
  selector: 'app-product-description',
  imports: [],
  template: `
    @if (product()) {
      <p>{{ product().description }}</p>

      <picture>
        <source [attr.srcset]="productMainImage()?.desktop" media="(min-width: 1024px)" />
        <source [attr.srcset]="productMainImage()?.tablet" media="(min-width: 768px)" />
        <img [src]="productMainImage()?.mobile" alt="Image of {{ product().slug }}" />
      </picture>
    }
  `,
  styles: '',
})
export class ProductDescriptionComponent {
  readonly productSignal = input.required<ProductItems>();
  readonly product = computed(() => this.productSignal());
  readonly productMainImage = computed(() => {
    const image = this.productSignal().productImages.find((img) => img.type === 'main');
    if (!image) {
      return null;
    }
    return {
      mobile: image.imageMobile.replace('./', ''),
      tablet: image.imageTablet.replace('./', ''),
      desktop: image.imageDesktop.replace('./', ''),
    };
  });
}
