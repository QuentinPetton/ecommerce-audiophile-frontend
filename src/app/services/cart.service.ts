import { Injectable, signal } from '@angular/core';
import type { CartItems } from '../models/cart-items';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartIsOpen = signal(false);
  private cartItems = signal<CartItems[]>([]);
  readonly isCartOpen = this.cartIsOpen.asReadonly();

  toggleCart() {
    this.cartIsOpen.update((isOpen) => !isOpen);
  }

  getCartItems() {
    return this.cartItems;
  }

  addToCart(product: CartItems) {
    //1) On vérifie si le produit existe
    //2) Si oui, on récupère le produit et on update la quantité
    //3) Sinon, ajout au tableau
    this.cartItems.update((items) => {
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
    this.cartItems.update((items) => {
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
    this.cartItems.update((items) => {
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
    this.cartItems.set([]);
    this.toggleCart();
  }

  //TODO: implementer getCartTotalPrice
}
