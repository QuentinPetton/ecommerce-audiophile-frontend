import { Component, computed, input } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import type { ProductItems } from '../../../models/product-items';

@Component({
  selector: 'app-other-product',
  imports: [UpperCasePipe],
  template: `
    <p>other-product works!</p>
    <h3>{{ 'You may also like' | uppercase }}</h3>
    <p>{{ product().others[0].otherSlug }}</p>
  `,
  styles: '',
})
export class OtherProductComponent {
  readonly productSignal = input.required<ProductItems>();
  readonly product = computed(() => this.productSignal());
}
