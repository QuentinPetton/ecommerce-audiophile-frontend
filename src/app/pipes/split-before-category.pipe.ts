import { inject, Pipe } from '@angular/core';
import type { PipeTransform } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Pipe({
  name: 'splitBeforeCategory',
  pure: false,
})
export class SplitBeforeCategoryPipe implements PipeTransform {
  private categoryService = inject(CategoryService);
  private categories = toSignal(this.categoryService.getAllCategories());

  transform(value: string | undefined): string {
    if (!value) return '';

    const categories = this.categories() ?? [];

    for (const category of categories) {
      const name = category.name;
      const singular = name.replace(/s$/i, '');

      // On vérifie d'abord la forme plurielle
      const pluralRegex = new RegExp(`\\b${name}\\b`, 'i');
      if (pluralRegex.test(value)) {
        return value.replace(pluralRegex, `\n${name}`).toUpperCase();
      }

      // Puis la forme singulière
      const singularRegex = new RegExp(`\\b${singular}\\b`, 'i');
      if (singularRegex.test(value)) {
        return value.replace(singularRegex, `\n${singular}`).toUpperCase();
      }
    }
    return value;
  }
}
