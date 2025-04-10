import { ProductService } from './../../../services/product.service';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import type { ProductItems } from '../../../models/product-items';

@Component({
  selector: 'app-hero',
  imports: [],
  template: `
    <section>
      <div class="text-center text-white z-20 font-manrope">
        <div
          class="bg-[url('/assets/home/mobile/image-header.jpg')] bg-contain bg-no-repeat h-screen"
        >
          <span>NEW PRODUCT</span>
          <h1>XX99 MARK II HEADPHONES</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality made for the passionate
            music enthusiast.
          </p>
          <button class="bg-[#D87D4A] p-3">SEE PRODUCT</button>
        </div>
      </div>
    </section>
    s

    <p>hero works!</p>

    <div>
      @for (product of products(); track productsTrack) {
        <div>{{ product.name }}</div>
      } @empty {
        <div>Pas de produits</div>
      }
    </div>
  `,
  styles: '',
})
export class HeroComponent {
  private readonly productService = inject(ProductService);
  readonly products = toSignal(this.productService.getAllProducts());

  readonly productsTrack = (index: number, product: ProductItems) => product.id;
}
