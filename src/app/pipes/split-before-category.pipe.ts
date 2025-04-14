import { inject, Pipe } from '@angular/core';
import type { PipeTransform } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Pipe({
  name: 'splitBeforeCategory',
})
export class SplitBeforeCategoryPipe implements PipeTransform {
  private categoryService = inject(CategoryService);
  private categories = toSignal(this.categoryService.getAllCategories());

  transform(value: string | undefined): string {
    if (!value) return '';

    const categories = this.categories() ?? [];

    for (const category of categories) {
      // remove the last 's' from the category name
      const singular = category.name.replace(/s$/i, '');
      const regex = new RegExp(`\\b${singular}\\b`, 'i');

      if (regex.test(value)) {
        return value.replace(regex, `\n${singular}`);
      }
    }
    return value;
  }
}
