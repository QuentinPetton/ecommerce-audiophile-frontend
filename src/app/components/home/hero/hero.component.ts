import { ProductService } from './../../../services/product.service';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { UpperCasePipe } from '@angular/common';
import type { ProductItems } from '../../../models/product-items';
import { SplitBeforeCategoryPipe } from '../../../pipes/split-before-category.pipe';

@Component({
  selector: 'app-hero',
  imports: [UpperCasePipe, SplitBeforeCategoryPipe],
  template: `
    <section class="text-center text-white font-manrope">
      <div
        class="bg-[url('/assets/home/mobile/image-header.jpg')] bg-cover bg-no-repeat bg-center h-[600px] flex flex-col justify-center items-center px-6
        md: bg-[url('/assets/home/tablet/image-header.jpg')] md:h-[729px]
        "
      >
        @if (product()?.new === true) {
          <span class="tracking-[0.5rem] text-sm opacity-40 mt-16 mb-2">{{
            'new product' | uppercase
          }}</span>
        }
        <h1 class="font-bold text-4xl whitespace-pre-line">
          {{ product()?.name | splitBeforeCategory | uppercase }}
        </h1>

        <p class="opacity-75 text-sm/6 mx-4 my-6">
          Experience natural, lifelike audio and exceptional build quality made for the passionate
          music enthusiast.
        </p>
        <button
          class="bg-[#D87D4A] px-6 py-3 text-sm tracking-widest hover:bg-orange-light transition cursor-pointer"
        >
          {{ 'see product' | uppercase }}
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
