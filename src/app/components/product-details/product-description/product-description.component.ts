import { Component, computed, input } from '@angular/core';
import type { ProductItems } from '../../../models/product-items';
import { UpperCasePipe } from '@angular/common';
import { SplitBeforeCategoryPipe } from '../../../pipes/split-before-category.pipe';
import { CurrencyPipe } from '@angular/common';
import { AddToCartButtonComponent } from '../add-to-cart-button/add-to-cart-button.component';

@Component({
  selector: 'app-product-description',
  imports: [UpperCasePipe, SplitBeforeCategoryPipe, CurrencyPipe, AddToCartButtonComponent],
  template: `
    @if (product()) {
      <section class="mx-8 pb-12 md:grid md:grid-cols-2 md:gap-12 lg:mx-24 lg:gap-16">
        <picture>
          <source [attr.srcset]="productMainImage()?.desktop" media="(min-width: 1024px)" />
          <source [attr.srcset]="productMainImage()?.tablet" media="(min-width: 768px)" />
          <img
            class="rounded-lg mb-6 lg:mb-0"
            [src]="productMainImage()?.mobile"
            alt="Image of {{ product().slug }}"
          />
        </picture>
        <div class="flex flex-col gap-4 md: mt-18 md:gap-8 lg:mt-8 lg:gap-6 lg:justify-center">
          @if (product().new) {
            <span class="text-xs text-orange tracking-[0.5rem] ">{{
              'new product' | uppercase
            }}</span>
          }
          <h1 class="whitespace-pre-line text-xl font-semibold md:text-3xl">
            {{ product().name | splitBeforeCategory | uppercase }}
          </h1>
          <p class="opacity-50 text-sm md:text-base">{{ product().description }}</p>
          <span class="font-bold">{{
            product().price | currency: 'USD' : 'symbol' : '1.0-0' : 'en'
          }}</span>
          <app-add-to-cart-button [product]="product()"> </app-add-to-cart-button>
        </div>
      </section>
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
