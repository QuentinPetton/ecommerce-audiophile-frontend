import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  template: `
    @if (!burgerMenuIsOpen()) {
      <nav
        class="absolute flex justify-between px-8 w-full items-center py-4 border-b border-grey-light/30"
      >
        <button (click)="toggleBurgerMenu()" class="cursor-pointer">
          <img src="/assets/shared/tablet/icon-hamburger.svg" alt="burger menu icon" />
        </button>
        <img src="/assets/shared/desktop/logo.svg" alt="logo audiophile" />
        <img src="/assets/shared/desktop/icon-cart.svg" alt="cart icon" />
      </nav>
    } @else {
      <p>test</p>
    }
  `,
  styles: '',
})
export class MenuComponent {
  burgerMenuIsOpen = signal(false);

  toggleBurgerMenu() {
    this.burgerMenuIsOpen.update((value) => !value);
  }
}
