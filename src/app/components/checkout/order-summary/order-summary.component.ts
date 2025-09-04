import { CartItems } from './../../../models/cart-items';
import { Component, inject } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-order-summary',
  imports: [UpperCasePipe],
  template: `
    <aside>
      <h2 class="text-lg tracking-widest font-bold">{{ 'Summary' | uppercase }}</h2>
    </aside>
    <p>order-summary works!</p>
  `,
  styles: ``,
})
export class OrderSummaryComponent {
  private readonly cart = inject(CartService);
  readonly CartItems = this.cart.getCartItems();
  readonly getTotalPrice = this.cart.getCartTotalPrice;
}
