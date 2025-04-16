import { ProductService } from './../../../services/product.service';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { UpperCasePipe } from '@angular/common';
import type { ProductItems } from '../../../models/product-items';
import { SplitBeforeCategoryPipe } from '../../../pipes/split-before-category.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [UpperCasePipe, SplitBeforeCategoryPipe, RouterLink],
  template: `
    <section class="text-center text-white font-manrope lg:text-left">
      <div
        class="bg-[url('/assets/home/mobile/image-header.jpg')] bg-cover bg-no-repeat bg-center h-[600px] flex flex-col justify-center items-center px-6
        md:bg-[url('/assets/home/tablet/image-header.jpg')] md:h-[729px]
        lg:bg-[url('/assets/home/desktop/image-hero.jpg')] lg:items-start lg:pl-22
        "
      >
        @if (product()?.new === true) {
          <span class="tracking-[0.5rem] text-sm opacity-40 mt-16 mb-2">{{
            'new product' | uppercase
          }}</span>
        }
        <h1 class="font-bold text-4xl whitespace-pre-line md:text-6xl">
          {{ product()?.name | splitBeforeCategory | uppercase }}
        </h1>

        <p class="opacity-75 text-sm/6 mx-4 my-6 md:mx-48 lg:mx-0 lg:max-w-xs">
          Experience natural, lifelike audio and exceptional build quality made for the passionate
          music enthusiast.
        </p>
        <button
          class="bg-[#D87D4A] px-6 py-3 text-sm tracking-widest hover:bg-orange-light transition cursor-pointer"
        >
          <a [routerLink]="['/product', product()?.slug]">
            {{ 'see product' | uppercase }}
          </a>
        </button>
      </div>
    </section>
  `,
  styles: '',
})
export class HeroComponent {
  private readonly productService = inject(ProductService);

  readonly product = toSignal(this.productService.getProductBySlug('xx99-mark-two-headphones'));

  readonly productsTrack = (index: number, product: ProductItems) => product.id;
}
