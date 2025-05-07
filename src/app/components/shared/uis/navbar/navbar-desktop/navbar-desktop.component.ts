import { Component, inject } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { CategoryService } from '../../../../../services/category.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-desktop',
  imports: [UpperCasePipe, RouterLink],
  template: `
    <nav class=" w-full  text-white px-22 bg-black">
      <div class=" flex items-center justify-between border-b border-grey-light/30 py-6">
        <a [routerLink]="'/'"
          ><img src="/assets/shared/desktop/logo.svg" alt="logo audiophile"
        /></a>

        <ul class="text-xs flex items-center gap-6">
          <li class=" cursor-pointer hover:text-orange-light">
            <a [routerLink]="'/'">{{ 'Home' | uppercase }}</a>
          </li>
          @for (category of categories(); track $index) {
            <li class=" cursor-pointer hover:text-orange-light">
              {{ category.slug | uppercase }}
            </li>
          }
        </ul>
        <img src="/assets/shared/desktop/icon-cart.svg" alt="cart icon" />
      </div>
    </nav>
  `,
  styles: '',
})
export class NavbarDesktopComponent {
  private readonly categoryService = inject(CategoryService);
  readonly categories = toSignal(this.categoryService.getAllCategories());
}
