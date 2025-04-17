import { Component, computed, input } from '@angular/core';
import type { ProductItems } from '../../../models/product-items';
import { UpperCasePipe } from '@angular/common';
import { SplitBeforeCategoryPipe } from '../../../pipes/split-before-category.pipe';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-description',
  imports: [UpperCasePipe, SplitBeforeCategoryPipe, CurrencyPipe],
  template: `
    @if (product()) {
      <picture>
        <source [attr.srcset]="productMainImage()?.desktop" media="(min-width: 1024px)" />
        <source [attr.srcset]="productMainImage()?.tablet" media="(min-width: 768px)" />
        <img [src]="productMainImage()?.mobile" alt="Image of {{ product().slug }}" />
      </picture>
      @if (product().new) {
        <span>{{ 'new product' | uppercase }}</span>
      }
      <h1 class="whitespace-pre-line">{{ product().name | splitBeforeCategory | uppercase }}</h1>
      <p>{{ product().description }}</p>
      <span>{{ product().price | currency: 'USD' : 'symbol' : '1.0-0' : 'en' }}</span>
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
