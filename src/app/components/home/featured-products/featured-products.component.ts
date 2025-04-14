import { Component, inject } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ProductItems } from '../../../models/product-items';
import { toSignal } from '@angular/core/rxjs-interop';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-featured-products',
  imports: [UpperCasePipe],
  template: `
    <section>
      <div>
        <img
          [src]="'/assets/home/desktop/image-' + featuredSpeakerPrimaryProduct()?.slug + '.png'"
          alt="'image of {{ featuredSpeakerPrimaryProduct()?.slug }}"
        />
        <h3>
          {{ featuredSpeakerPrimaryProduct()?.name | uppercase }}
        </h3>
        <p>
          {{ featuredSpeakerPrimaryProduct()?.description }}
        </p>
        <button>See product</button>
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
