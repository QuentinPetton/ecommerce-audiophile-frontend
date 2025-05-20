import { CartService } from './../../../../services/cart.service';
import { Component, inject } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-open',
  imports: [UpperCasePipe, CurrencyPipe],
  template: `
    <div
      class="fixed inset-0 z-50 flex justify-center items-start mt-20 px-4 md:justify-end lg:mr-10"
    >
      <div
        class=" top-20 max-h-[80vh] w-full max-w-[377px] bg-white text-black p-6 shadow-2xl rounded-lg z-50 overflow-y-auto"
      >
        @if (cartItems().length === 0) {
          <p>Votre panier est vide</p>
        } @else {
          <div class="flex justify-between pb-6 ">
            <h2>{{ 'Cart' | uppercase }} ({{ cartItems().length }})</h2>
            <button
              (click)="removeAllItemsFromCart()"
              class="cursor-pointer underline text-black/50"
            >
              Remove all
            </button>
            <button (click)="toggleCart()" class="cursor-pointer text-red-700 px-6">x</button>
          </div>
        }
        <div>
          @for (cartItems of cartItems(); track $index) {
            <div class="grid grid-cols-3 gap-4 pb-4 items-center">
              <img
                class="w-20 rounded-lg"
                [src]="cartItems.image"
                alt="Image of {{ cartItems.slug }}"
              />
              <div>
                <h3 class="text-sm">{{ cartItems.slug | uppercase }}</h3>
                <span class="text-black/50">{{
                  cartItems.price | currency: 'USD' : 'symbol' : '1.0-0' : 'en'
                }}</span>
              </div>
              <div class="bg-grey-light my-4 p-2 flex items-center justify-around ">
                <button
                  (click)="removeOneQuantityFromCart(cartItems.id)"
                  class="cursor-pointer text-black/25"
                >
                  -
                </button>
                <span>{{ cartItems.quantity }}</span>
                <button
                  (click)="addOneQuantityToCart(cartItems.id)"
                  class="cursor-pointer text-black/25"
                >
                  +
                </button>
              </div>
            </div>
          }
        </div>
        <div class="flex justify-between pb-4">
          <span class="text-black/50">{{ 'Total' | uppercase }}</span>
          <span class=" font-bold ">{{
            getTotalPrice() | currency: 'USD' : 'symbol' : '1.0-0' : 'en'
          }}</span>
        </div>
        <button
          class="bg-orange text-white px-6 py-4 text-xs tracking-widest hover:bg-orange-light transition cursor-pointer w-full"
        >
          {{ 'Checkout' | uppercase }}
        </button>
      </div>
    </div>
  `,
  styles: '',
})
export class CartOpenComponent {
  readonly CartService = inject(CartService);
  readonly cartItems = this.CartService.getCartItems();
  readonly removeOneQuantityFromCart = this.CartService.removeOneQuantityFromCart;
  readonly addOneQuantityToCart = this.CartService.addOneQuantityToCart;
  readonly removeAllItemsFromCart = this.CartService.removeAllItemsFromCart;
  readonly toggleCart = () => this.CartService.toggleCart();
  readonly getTotalPrice = this.CartService.getCartTotalPrice;
}
