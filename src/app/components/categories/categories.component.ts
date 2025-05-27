import { Component, inject } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CategoryComponent } from './category/category.component';

@Component({
  selector: 'app-categories',
  imports: [CategoryComponent],
  template: `
    <section class="md:grid md:grid-cols-3 lg:m-12">
      @for (category of categories(); track $index) {
        <app-category [category]="category"></app-category>
      }
    </section>
  `,
  styles: '',
})
export class CategoriesComponent {
  private readonly categoryService = inject(CategoryService);
  readonly categories = toSignal(this.categoryService.getAllCategories());
}
