import { Component, input } from '@angular/core';
import type { Category } from '../../../../models/category';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-category',
  imports: [JsonPipe],
  template: ` <pre>{{ category() | json }}</pre>

    <p>{{ category()?.slug }}</p>`,
  styles: '',
})
export class CategoryComponent {
  readonly category = input<Category>();
}
