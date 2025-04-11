import { Component, input } from '@angular/core';
import type { Category } from '../../../../models/category';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-category',
  imports: [UpperCasePipe],
  template: `
    <div
      class="bg-grey-light mx-8 relative flex flex-col items-center text-center mt-20 rounded-lg gap-4 font-manrope"
    >
      <img
        class="absolute -top-14 w-36"
        src="{{ category()?.thumbnail }}"
        alt="thunbnail of {{ category()?.slug }}"
      />
      <h2 class="mt-20 text-md">{{ category()?.slug | uppercase }}</h2>
      <button class="flex items-center gap-3 mb-4  cursor-pointer hover:text-orange transition">
        <span class="opacity-50 text-sm hover:opacity-100">
          {{ 'Shop' | uppercase }}
        </span>
        <img src="/assets/shared/desktop/icon-arrow-right.svg" alt="icon for shop button" />
      </button>
    </div>
  `,
  styles: '',
})
export class CategoryComponent {
  readonly category = input<Category>();
}
