import { Component, inject } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ProductItems } from '../../../models/product-items';
import { toSignal } from '@angular/core/rxjs-interop';
import { UpperCasePipe } from '@angular/common';
import { SplitBeforeCategoryPipe } from '../../../pipes/split-before-category.pipe';

@Component({
  selector: 'app-featured-products',
  imports: [UpperCasePipe, SplitBeforeCategoryPipe],
  template: `
    <section class="overflow-hidden mt-20 ">
      <div
        class="bg-orange text-white text-center relative flex flex-col items-center mx-8 rounded-lg pb-12"
      >
        <img
          class="absolute top-[-22%] left-1/2 -translate-x-1/2 w-[530px] max-w-none"
          src="/assets/home/desktop/pattern-circles.svg"
          alt="white pattern circle"
        />
        <img
          class="w-1/2 z-10 relative mt-12"
          [src]="'/assets/home/desktop/image-' + featuredSpeakerPrimaryProduct()?.slug + '.png'"
          alt="'image of {{ featuredSpeakerPrimaryProduct()?.slug }}"
        />
        <h3 class="text-3xl whitespace-pre-line pt-6 font-semibold">
          {{ featuredSpeakerPrimaryProduct()?.slug | splitBeforeCategory | uppercase }}
        </h3>
        <p class="my-6 opacity-75">
          Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
        </p>
        <button class="bg-black py-4 px-8 text-sm cursor-pointer">
          {{ 'see product' | uppercase }}
        </button>
      </div>
      <div class="relative mx-8 py-4 ">
        <img
          [src]="'/assets/home/mobile/image-' + featuredSpeakerSecondaryProduct()?.slug + '.jpg'"
          alt="'image of {{ featuredSpeakerSecondaryProduct()?.slug }}"
          class="rounded-lg  "
        />
        <div class="absolute top-1/3 mx-8">
          <h3 class="font-semibold text-2xl pb-8">
            {{ featuredSpeakerSecondaryProduct()?.slug | uppercase }}
          </h3>
          <button class="border border-black py-3 px-6 text-sm cursor-pointer">
            {{ 'see product' | uppercase }}
          </button>
        </div>
      </div>
      <div class="mx-8">
        <img
          class="rounded-lg"
          [src]="'/assets/home/desktop/image-' + featuredEarphoneProduct()?.slug + '.jpg'"
          alt="image of {{ featuredEarphoneProduct()?.slug }}"
        />
        <div class="bg-grey-light mt-4 py-12 px-8 rounded-lg">
          <h3 class="font-semibold text-2xl pb-6">
            {{ featuredEarphoneProduct()?.slug | uppercase }}
          </h3>
          <button class="border border-black py-3 px-6 text-sm cursor-pointer">
            {{ 'see product' | uppercase }}
          </button>
        </div>
      </div>
    </section>
  `,
  styles: '',
})
export class FeaturedProductsComponent {
  //todo add control flow
  private readonly productService = inject(ProductService);

  readonly featuredSpeakerPrimaryProduct = toSignal(
    this.productService.getProductBySlug('zx9-speaker'),
  );
  readonly featuredSpeakerSecondaryProduct = toSignal(
    this.productService.getProductBySlug('zx7-speaker'),
  );
  readonly featuredEarphoneProduct = toSignal(
    this.productService.getProductBySlug('yx1-earphones'),
  );
}
