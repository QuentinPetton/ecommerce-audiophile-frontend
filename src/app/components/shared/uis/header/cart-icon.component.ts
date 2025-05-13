import { Component, inject } from '@angular/core';
import { CartService } from '../../../../services/cart.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-cart-icon',
  imports: [JsonPipe],
  template: `
    <img src="/assets/shared/desktop/icon-cart.svg" alt="cart icon" />
    @if (cartItems().length === 0) {
      <p>Votre panier est vide</p>
    }
    <pre>{{ cartItems() | json }}</pre>
  `,
  styles: '',
})
export class CartIconComponent {
  readonly cartService = inject(CartService);
  readonly cartItems = this.cartService.getCartItems();
}
