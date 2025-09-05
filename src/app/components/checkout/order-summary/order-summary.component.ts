import { CartItems } from './../../../models/cart-items';
import { Component, inject } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { CartService } from '../../../services/cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-order-summary',
  imports: [UpperCasePipe, CurrencyPipe],
  template: `
    <aside>
      <h2 class="text-lg tracking-widest font-bold">{{ 'Summary' | uppercase }}</h2>
      @if (cartItems().length === 0) {
        <p class="text-sm text-black/60">Votre panier est vide.</p>
      } @else {
        <ul>
          @for (CartItems of cartItems(); track $index) {
            <li class="grid grid-cols-[56px_1fr_auto] items-center gap-4">
              <img class="w-14 h-14 rounded" [src]="CartItems.image" [alt]="CartItems.slug" />
              <div>
                <div class="text-sm font-semibold">{{ CartItems.slug | uppercase }}</div>
                <div class="text-xs text-black/50">
                  {{ CartItems.price | currency: 'USD' : 'symbol' : '1.0-0' : 'en' }}
                </div>
              </div>
              <div class="text-sm font-semibold text-black/60">x{{ CartItems.quantity }}</div>
            </li>
          }
        </ul>
        <div>
          <div class="flex justify-between items-center mt-6">
            <span class="text-sm text-black/50">{{ 'Total' | uppercase }}</span>
            <span class="text-lg font-bold">{{
              getTotalPrice() | currency: 'USD' : 'symbol' : '1.0-0' : 'en'
            }}</span>
            <span class="text-sm text-black/50">{{ 'Shipping' | uppercase }}</span>
            <span class="text-lg font-bold">
              {{ getShippingCost() | currency: 'USD' : 'symbol' : '1.0-0' : 'en' }}
            </span>
            <span class="text-sm text-black/50">{{ 'VAT (included)' | uppercase }}</span>
            <span class="text-lg font-bold">{{
              getVat() | currency: 'USD' : 'symbol' : '1.0-0' : 'en'
            }}</span>

            <span class="text-sm text-black/50">{{ 'Grand Total' | uppercase }}</span>
            <span class="text-lg font-bold"
              >{{ getGrandTotal() | currency: 'USD' : 'symbol' : '1.0-0' : 'en' }}
            </span>
          </div>
          <button
            class="w-full bg-orange text-white py-4 mt-6 rounded-lg hover:bg-orange/75 transition cursor-pointer"
          >
            {{ 'Continue' | uppercase }}
          </button>
        </div>
      }
    </aside>
  `,
  styles: '',
})
export class OrderSummaryComponent {
  private readonly cart = inject(CartService);
  readonly cartItems = this.cart.cartItems;
  readonly getTotalPrice = this.cart.getCartTotalPrice;
  readonly getShippingCost = this.cart.getShippingCost;
  readonly getGrandTotal = this.cart.getGrandTotal;
  readonly getVat = this.cart.getVat;
}
