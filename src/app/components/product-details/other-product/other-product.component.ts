import { Component, computed, input } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import type { ProductItems } from '../../../models/product-items';

@Component({
  selector: 'app-other-product',
  imports: [UpperCasePipe],
  template: `
    <p>other-product works!</p>
    <h3>{{ 'You may also like' | uppercase }}</h3>
    @for (otherProduct of othersProduct(); track $index) {
      <img [src]="otherProduct.imageMobile" alt="image of {{ otherProduct.otherName }}" />
      <h4>{{ otherProduct.otherName }}</h4>
    }
  `,
  styles: '',
})
export class OtherProductComponent {
  readonly productSignal = input.required<ProductItems>();
  readonly othersProduct = computed(() => this.productSignal().others);
}
