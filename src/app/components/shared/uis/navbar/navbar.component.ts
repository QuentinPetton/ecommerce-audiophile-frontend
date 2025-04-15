import { toSignal } from '@angular/core/rxjs-interop';
import { Component, inject } from '@angular/core';
import { CategoryService } from '../../../../services/category.service';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [UpperCasePipe],
  template: `
    <nav>
      <ul>
        <li>{{ 'Home' | uppercase }}</li>
        @for (category of categories(); track $index) {
          <li>{{ category.slug | uppercase }}</li>
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
