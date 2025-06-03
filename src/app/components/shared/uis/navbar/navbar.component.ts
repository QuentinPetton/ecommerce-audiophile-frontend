import { toSignal } from '@angular/core/rxjs-interop';
import { Component, inject } from '@angular/core';
import { CategoryService } from '../../../../services/category.service';
import { UpperCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [UpperCasePipe, RouterLink],
  template: `
    <nav>
      <ul class="text-xs">
        <li class="pb-4 cursor-pointer hover:text-orange-light">
          <a [routerLink]="'/'">
            {{ 'Home' | uppercase }}
          </a>
        </li>
        @for (category of categories(); track $index) {
          <li class="pb-4 cursor-pointer hover:text-orange-light">
            <a [routerLink]="['/category', category.slug]">
              {{ category.slug | uppercase }}
            </a>
          </li>
        }
      </ul>
    </nav>
  `,
  styles: '',
})
export class NavbarComponent {
  private readonly categoryService = inject(CategoryService);
  readonly categories = toSignal(this.categoryService.getAllCategories());
}
//TODO renommer ce composant pour spécifier mobile/tablet
