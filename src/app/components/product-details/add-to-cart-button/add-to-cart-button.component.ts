import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-add-to-cart-button',
  imports: [UpperCasePipe],
  template: `
    <div class="flex gap-4">
      <div class="bg-grey-light px-6 py-3 flex gap-4">
        <button class="opacity-50 cursor-pointer">-</button>
        1
        <button class="opacity-50 cursor-pointer">+</button>
      </div>
      <button
        class="bg-orange px-6 py-3 text-white text-sm cursor-pointer hover:bg-orange-light transition"
      >
        {{ 'Add to Cart ' | uppercase }}
      </button>
    </div>
  `,
  styles: '',
})
export class AddToCartButtonComponent {}
