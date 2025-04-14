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
    <section class="overflow-hidden mt-20 text-white text-center">
      <div class="bg-orange relative flex flex-col items-center mx-8 rounded-lg pb-12">
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
          {{ featuredSpeakerPrimaryProduct()?.name | splitBeforeCategory | uppercase }}
        </h3>
        <p class="my-6 opacity-75">
          Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
        </p>
        <button class="bg-black py-4 px-8 text-sm cursor-pointer">
          {{ 'see product' | uppercase }}
        </button>
      </div>
      <div>
        <h3>
          {{ featuredSpeakerSecondaryProduct()?.name | uppercase }}
        </h3>
      </div>
      <div>
        <h3>
          {{ featuredEarphoneProduct()?.name | uppercase }}
        </h3>
      </div>
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
