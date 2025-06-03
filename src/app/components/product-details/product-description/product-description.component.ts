import { Component, computed, input } from '@angular/core';
import type { ProductItems } from '../../../models/product-items';
import { UpperCasePipe, NgClass } from '@angular/common';
import { SplitBeforeCategoryPipe } from '../../../pipes/split-before-category.pipe';
import { CurrencyPipe } from '@angular/common';
import { AddToCartButtonComponent } from '../add-to-cart-button/add-to-cart-button.component';

@Component({
  selector: 'app-product-description',
  imports: [
    UpperCasePipe,
    SplitBeforeCategoryPipe,
    CurrencyPipe,
    AddToCartButtonComponent,
    NgClass,
  ],
  template: `
    @if (product()) {
      <section [ngClass]="getDisplayStyle()">
        <picture
          [ngClass]="{
            'lg:col-start-1': displayStyle() === 'categoryPage' && isReversedLayout(),
            'lg:col-start-2 ': displayStyle() === 'categoryPage' && !isReversedLayout(),
          }"
        >
          <source [attr.srcset]="productMainImage()?.desktop" media="(min-width: 1024px)" />
          <source [attr.srcset]="productMainImage()?.tablet" media="(min-width: 768px)" />
          <img
            class="rounded-lg mb-6 md:w-1/3 md:mx-auto md:mb-0 lg:w-full lg:mb-0 "
            [src]="productMainImage()?.mobile"
            alt="Image of {{ product().slug }}"
          />
        </picture>
        <div
          [ngClass]="{
            'lg:col-start-2 lg:row-start-1':
              displayStyle() === 'categoryPage' && isReversedLayout(),
            'lg:col-start-1 lg:row-start-1':
              displayStyle() === 'categoryPage' && !isReversedLayout(),
          }"
          class="flex flex-col gap-4 md: mt-18 md:gap-8 lg:mt-8 lg:gap-6 lg:justify-center"
        >
          @if (product().new) {
            <span class="text-xs text-orange tracking-[0.5rem] ">{{
              'new product' | uppercase
            }}</span>
          }
          <h1 class="whitespace-pre-line text-xl font-semibold md:text-3xl">
            {{ product().name | splitBeforeCategory | uppercase }}
          </h1>
          <p class="opacity-50 text-sm md:text-base">
            {{ product().description }}
          </p>
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
  readonly displayStyle = input.required<'productPage' | 'categoryPage'>();
  readonly isReversedLayout = input<boolean>(false);
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
  //TODO: isoler productDescription button pour avoir un see more depuis catégories
  //TODO: avoir un stylelayout quand productDecription component est utilisé dans d'autres composants spécifique

  getProductPageStyle() {
    return 'mx-8 pb-12 md:grid md:grid-cols-2 md:gap-12 lg:mx-24 lg:gap-16';
  }
  getCategoryPageStyle() {
    return 'mx-8 pb-12 text-center md:grid md:grid-cols-1 md:justify-items-center  lg:grid lg:grid-cols-2 lg:gap-16 lg:mx-24 lg:text-left';
  }
  getDisplayStyle() {
    if (this.displayStyle() === 'productPage') {
      return this.getProductPageStyle();
    }
    return this.getCategoryPageStyle();
  }
}
