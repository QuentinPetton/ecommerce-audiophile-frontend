import { Component, inject } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ProductItems } from '../../../models/product-items';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-featured-products',
  imports: [],
  template: `
    <p>
      {{ featuredSpeakerPrimaryProduct()?.name }}
    </p>
    <p>
      {{ featuredSpeakerSecondaryProduct()?.name }}
    </p>
    <p>
      {{ featuredEarphoneProduct()?.name }}
    </p>
    <p>featured-products works!</p>
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
