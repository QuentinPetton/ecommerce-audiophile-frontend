import { Component, inject } from '@angular/core';
import { CartService } from '../../../../services/cart.service';
import { JsonPipe } from '@angular/common';
import { CartOpenComponent } from './cart-open.component';

@Component({
  selector: 'app-cart-icon',
  imports: [JsonPipe, CartOpenComponent],
  template: `
    <img (click)="handleCartClick()" src="/assets/shared/desktop/icon-cart.svg" alt="cart icon" />
    @if (cartService.isCartOpen()) {
      <app-cart-open></app-cart-open>
    }
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
  handleCartClick() {
    this.cartService.toggleCart();
  }
}
