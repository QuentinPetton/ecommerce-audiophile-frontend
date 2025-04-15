import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-burgerMenu',
  imports: [],
  template: ` <nav
    class="absolute flex justify-between px-8 w-full items-center py-4 border-b border-grey-light/30"
  >
    <button (click)="toggleBurgerMenu.emit()" class="cursor-pointer">
      <img src="/assets/shared/tablet/icon-hamburger.svg" alt="burger menu icon" />
    </button>
    <img src="/assets/shared/desktop/logo.svg" alt="logo audiophile" />
    <img src="/assets/shared/desktop/icon-cart.svg" alt="cart icon" />
  </nav>`,
  styles: '',
})
export class BurgerMenuComponent {
  @Input() burgerMenuIsOpen = false;
  @Output() toggleBurgerMenu = new EventEmitter();
}
