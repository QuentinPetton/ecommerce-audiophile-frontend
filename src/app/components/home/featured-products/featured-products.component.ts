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
      @if (featuredSpeakerPrimaryProduct()) {
        <div
          class="bg-orange text-white text-center relative flex flex-col items-center mx-8 rounded-lg pb-12"
        >
          <img
            class="absolute top-[-22%] left-1/2 -translate-x-1/2 w-[530px] max-w-none md:w-[780px] md:top-[-40%]"
            src="/assets/home/desktop/pattern-circles.svg"
            alt="white pattern circle"
          />
          <picture class="w-1/2 z-10 relative mt-12 md:w-1/4">
            <source
              [attr.srcset]="
                '/assets/home/desktop/image-' + featuredSpeakerPrimaryProduct()?.slug + '.png'
              "
              media="(min-width: 1024px)"
            />
            <source
              [attr.srcset]="
                '/assets/home/tablet/image-' + featuredSpeakerPrimaryProduct()?.slug + '.png'
              "
              media="(min-width: 768px)"
            />
            <img
              [src]="'/assets/home/mobile/image-' + featuredSpeakerPrimaryProduct()?.slug + '.png'"
              alt="'image of {{ featuredSpeakerPrimaryProduct()?.slug }}"
            />
          </picture>
          <h3 class="text-3xl whitespace-pre-line pt-6 font-semibold md:text-5xl">
            {{ featuredSpeakerPrimaryProduct()?.name | splitBeforeCategory | uppercase }}
          </h3>
          <p class="my-6 opacity-75 md:mx-42">
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable
            sound.
          </p>
          <button class="bg-black py-4 px-8 text-sm cursor-pointer z-10 hover:bg-grey">
            {{ 'see product' | uppercase }}
          </button>
        </div>
      }
      @if (featuredSpeakerSecondaryProduct()) {
        <div class="relative mx-8 py-4 ">
          <picture class="rounded-lg  ">
            <source
              [attr.srcset]="
                '/assets/home/desktop/image-' + featuredSpeakerSecondaryProduct()?.slug + '.jpg'
              "
              media="(min-width: 1024px)"
            />
            <source
              [attr.srcset]="
                '/assets/home/tablet/image-' + featuredSpeakerSecondaryProduct()?.slug + '.jpg'
              "
              media="(min-width: 768px)"
            />
            <img
              [src]="
                '/assets/home/mobile/image-' + featuredSpeakerSecondaryProduct()?.slug + '.jpg'
              "
              alt="'image of {{ featuredSpeakerSecondaryProduct()?.slug }}"
            />
          </picture>
          <div class="absolute top-1/3 mx-8">
            <h3 class="font-semibold text-2xl pb-8">
              {{ featuredSpeakerSecondaryProduct()?.name | uppercase }}
            </h3>
            <button
              class="border border-black py-3 px-6 text-sm cursor-pointer hover:bg-black hover:text-white"
            >
              {{ 'see product' | uppercase }}
            </button>
          </div>
        </div>
      }
      @if (featuredEarphoneProduct()) {
        <div class="mx-8">
          <img
            class="rounded-lg"
            [src]="'/assets/home/desktop/image-' + featuredEarphoneProduct()?.slug + '.jpg'"
            alt="image of {{ featuredEarphoneProduct()?.slug }}"
          />
          <div class="bg-grey-light mt-4 py-12 px-8 rounded-lg">
            <h3 class="font-semibold text-2xl pb-6">
              {{ featuredEarphoneProduct()?.name | uppercase }}
            </h3>
            <button
              class="border border-black py-3 px-6 text-sm cursor-pointer hover:bg-black hover:text-white"
            >
              {{ 'see product' | uppercase }}
            </button>
          </div>
        </div>
      }
    </section>
  `,
  styles: '',
})
export class FeaturedProductsComponent {
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
