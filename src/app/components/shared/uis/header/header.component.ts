import { Component, signal } from '@angular/core';
import { CategoriesComponent } from '../../../home/categories/categories.component';
import { BurgerMenuComponent } from './burgerMenu.component';

@Component({
  selector: 'app-header',
  imports: [CategoriesComponent, BurgerMenuComponent],
  template: `
    <header>
      @if (!burgerMenuIsOpen()) {
        <app-burgerMenu
          [burgerMenuIsOpen]="burgerMenuIsOpen()"
          (toggleBurgerMenu)="toggleBurgerMenu()"
        ></app-burgerMenu>
      } @else {
        <div (click)="toggleBurgerMenu()" class="fixed inset-0 z-10 bg-black/50"></div>
        <div class="absolute top-0 left-0 w-full flex flex-col z-40">
          <app-burgerMenu
            [burgerMenuIsOpen]="burgerMenuIsOpen()"
            (toggleBurgerMenu)="toggleBurgerMenu()"
            class="z-50 bg-black pb-14"
          ></app-burgerMenu>
          <app-categories class="bg-white pb-6 rounded-b-lg"></app-categories>
        </div>
      }
    </header>
  `,
  styles: '',
})
export class HeaderComponent {
  burgerMenuIsOpen = signal(false);

  toggleBurgerMenu() {
    this.burgerMenuIsOpen.update((value) => !value);
  }
}
