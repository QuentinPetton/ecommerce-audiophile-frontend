import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  template: `
    <nav
      class="absolute flex justify-between px-8 w-full items-center py-4 border-b border-grey-light/30"
    >
      <img src="/assets/shared/tablet/icon-hamburger.svg" alt="burger menu icon" />
      <img src="/assets/shared/desktop/logo.svg" alt="logo audiophile" />
      <img src="/assets/shared/desktop/icon-cart.svg" alt="cart icon" />
    </nav>
  `,
  styles: '',
})
export class MenuComponent {}
