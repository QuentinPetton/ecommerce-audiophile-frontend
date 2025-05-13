import { CartService } from './../../../../services/cart.service';
import { Component, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-cart-open',
  imports: [JsonPipe],
  template: ` <p>cart-open works!</p>
    @if (cartItems().length === 0) {
      <p>Votre panier est vide</p>
    }
    <pre>{{ cartItems() | json }}</pre>`,
  styles: '',
})
export class CartOpenComponent {
  readonly CartService = inject(CartService);
  readonly cartItems = this.CartService.getCartItems();
}
