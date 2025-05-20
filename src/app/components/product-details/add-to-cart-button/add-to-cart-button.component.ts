import type { ProductItems } from './../../../models/product-items';
import type { CartItems } from './../../../models/cart-items';
import { CartService } from './../../../services/cart.service';
import { Component, inject, input, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-add-to-cart-button',
  imports: [UpperCasePipe],
  template: `
    <div class="flex gap-4">
      <div class="bg-grey-light px-6 py-3 flex gap-4">
        <button
          [disabled]="quantity() <= 1"
          (click)="decrement()"
          class="opacity-50 cursor-pointer"
        >
          -
        </button>
        {{ quantity() }}
        <button (click)="increment()" class="opacity-50 cursor-pointer">+</button>
      </div>
      <button
        (click)="addToCart()"
        class="bg-orange px-6 py-3 text-white text-sm cursor-pointer hover:bg-orange-light transition"
      >
        {{ 'Add to Cart ' | uppercase }}
      </button>
    </div>
  `,
  styles: '',
})
export class AddToCartButtonComponent {
  readonly product = input.required<ProductItems>();
  quantity = signal(1);
  private readonly cartService = inject(CartService);
  increment() {
    this.quantity.update((currentValue) => currentValue + 1);
  }
  decrement() {
    this.quantity.update((currentValue) => currentValue - 1);
  }
  addToCart() {
    const addProductToCart: CartItems = {
      id: this.product().id,
      slug: this.product().slug,
      price: this.product().price,
      quantity: this.quantity(),
      image: this.product().productImages[0].imageMobile,
    };
    this.cartService.addToCart(addProductToCart);
  }
}
