import { Component, inject } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ProductItems } from '../../../models/product-items';
import { toSignal } from '@angular/core/rxjs-interop';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-featured-products',
  imports: [UpperCasePipe],
  template: `
    <section class="overflow-hidden mt-20 text-white text-center">
      <div class="bg-orange relative flex flex-col items-center mx-8 rounded-lg pb-16">
        <img
          class="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[530px] max-w-none"
          src="/assets/home/desktop/pattern-circles.svg"
          alt="white pattern circle"
        />
        <img
          class="w-1/2 z-10 relative mt-14"
          [src]="'/assets/home/desktop/image-' + featuredSpeakerPrimaryProduct()?.slug + '.png'"
          alt="'image of {{ featuredSpeakerPrimaryProduct()?.slug }}"
        />
        <h3 class="text-3xl line-clamp-2">
          {{ featuredSpeakerPrimaryProduct()?.name | uppercase }}
        </h3>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
        </p>
        <button class="bg-black p-2 text-xs">{{ 'see product' | uppercase }}</button>
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
