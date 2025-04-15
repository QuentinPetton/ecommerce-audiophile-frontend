import { Component, signal } from '@angular/core';
import { CategoriesComponent } from '../../../home/categories/categories.component';
import { NavbarComponent } from './navbar.component';

@Component({
  selector: 'app-menu',
  imports: [CategoriesComponent, NavbarComponent],
  template: `
    @if (!burgerMenuIsOpen()) {
      <app-navbar
        [burgerMenuIsOpen]="burgerMenuIsOpen()"
        (toggleBurgerMenu)="toggleBurgerMenu()"
      ></app-navbar>
    } @else {
      <app-categories></app-categories>
      <app-navbar
        [burgerMenuIsOpen]="burgerMenuIsOpen()"
        (toggleBurgerMenu)="toggleBurgerMenu()"
      ></app-navbar>
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
