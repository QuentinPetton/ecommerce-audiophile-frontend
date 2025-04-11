import { Component, input } from '@angular/core';
import type { Category } from '../../../../models/category';
import { JsonPipe } from '@angular/common';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-category',
  imports: [UpperCasePipe],
  template: `
    <div>
      <img src="{{ category()?.thumbnail }}" alt="" />
      <h2>{{ category()?.slug | uppercase }}</h2>
      <button>
        {{ 'Shop' | uppercase }}
        <img src="/assets/shared/desktop/icon-arrow-right.svg" alt="icon for shop button" />
      </button>
    </div>
  `,
  styles: '',
})
export class CategoryComponent {
  readonly category = input<Category>();
}
