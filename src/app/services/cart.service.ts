import { computed, Injectable, signal } from '@angular/core';
import type { CartItems } from '../models/cart-items';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartIsOpenSignal = signal(false);
  private cartItemsSignal = signal<CartItems[]>([]);
  readonly isCartOpen = this.cartIsOpenSignal.asReadonly();
  readonly cartItems = this.cartItemsSignal.asReadonly();

  toggleCart() {
    this.cartIsOpenSignal.update((isOpen) => !isOpen);
  }

  addToCart(product: CartItems) {
    //1) On vérifie si le produit existe
    //2) Si oui, on récupère le produit et on update la quantité
    //3) Sinon, ajout au tableau
    this.cartItemsSignal.update((items) => {
      const existingItem = items.find((item) => item.id === product.id);
      if (existingItem) {
        return items.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + product.quantity,
              }
            : item,
        );
      }
      return [...items, product];
    });
  }
  addOneQuantityToCart(productId: number) {
    this.cartItemsSignal.update((items) => {
      return items.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      );
    });
  }

  removeOneQuantityFromCart(productId: number) {
    this.cartItemsSignal.update((items) => {
      return items
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0);
    });
  }
  removeAllItemsFromCart() {
    this.cartItemsSignal.set([]);
    this.toggleCart();
  }

  readonly getCartTotalPrice = computed(() => {
    return this.cartItems().reduce((total, item) => total + item.price * item.quantity, 0);
  });
  readonly getShippingCost = computed(() => (this.cartItems().length > 0 ? 50 : 0));
  readonly getVat = computed(() => this.getCartTotalPrice() * 0.2);
  readonly getGrandTotal = computed(
    () => this.getCartTotalPrice() + this.getShippingCost() + this.getVat(),
  );
}
