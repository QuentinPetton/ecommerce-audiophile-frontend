import { Component, inject } from '@angular/core';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-cart-icon',
  imports: [],
  template: `
    <img
      (click)="handleCartClick()"
      src="/assets/shared/desktop/icon-cart.svg"
      alt="cart icon, click to open cartItems"
    />
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
