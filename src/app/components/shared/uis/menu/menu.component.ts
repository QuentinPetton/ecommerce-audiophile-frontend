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
      <div (click)="toggleBurgerMenu()" class="fixed inset-0 z-10 bg-black/50"></div>
      <div class="absolute top-0 left-0 w-full flex flex-col z-40">
        <app-navbar
          [burgerMenuIsOpen]="burgerMenuIsOpen()"
          (toggleBurgerMenu)="toggleBurgerMenu()"
          class="z-50 bg-black pb-14"
        ></app-navbar>
        <app-categories class="bg-white pb-6 rounded-b-lg"></app-categories>
      </div>
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
