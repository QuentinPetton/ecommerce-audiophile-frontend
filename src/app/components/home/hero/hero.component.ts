import { ProductService } from './../../../services/product.service';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import type { ProductItems } from '../../../models/product-items';

@Component({
  selector: 'app-hero',
  imports: [],
  template: `
    <section class="text-center text-white font-manrope">
      <div
        class="bg-[url('/assets/home/mobile/image-header.jpg')] bg-cover bg-no-repeat bg-center h-[600px] flex flex-col justify-center items-center px-6"
      >
        <span class="tracking-[0.5rem] text-sm opacity-40 mt-16 mb-2">NEW PRODUCT</span>
        <h1 class="font-bold text-4xl">XX99 MARK II HEADPHONES</h1>
        <p class="opacity-75 text-sm/6 mx-4 my-6">
          Experience natural, lifelike audio and exceptional build quality made for the passionate
          music enthusiast.
        </p>
        <button
          class="bg-[#D87D4A] px-6 py-3 text-sm tracking-widest hover:bg-[#FBAF85] transition cursor-pointer"
        >
          SEE PRODUCT
        </button>
      </div>
    </section>

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
