import { CartService } from './../../../../services/cart.service';
import { Component, inject } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-open',
  imports: [UpperCasePipe, CurrencyPipe],
  template: `
    @if (cartItems().length === 0) {
      <p>Votre panier est vide</p>
    }
    <div>
      <h2>{{ 'Cart' | uppercase }} ({{ cartItems().length }})</h2>
      <button class="cursor-pointer">Remove all</button>
      @for (cartItems of cartItems(); track $index) {
        <div>
          <h3>{{ cartItems.slug | uppercase }}</h3>
          <span>{{ cartItems.price | currency: 'USD' : 'symbol' : '1.0-0' : 'en' }}</span>
          <div>
            <button class="cursor-pointer">-</button>
            <span>{{ cartItems.quantity }}</span>
            <button class="cursor-pointer">+</button>
          </div>
        </div>
        <span>{{ 'Total' | uppercase }}</span>
        <button class="cursor-pointer">{{ 'Checkout' | uppercase }}</button>
      }
    </div>
  `,
  styles: '',
})
export class CartOpenComponent {
  readonly CartService = inject(CartService);
  readonly cartItems = this.CartService.getCartItems();
}
