import { Component, inject } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-categories',
  imports: [],
  template: ' <p>categories works!</p> ',
  styles: '',
})
export class CategoriesComponent {
  private readonly categoryService = inject(CategoryService);
  readonly cetegories = toSignal(this.categoryService.getAllCategories());
}
