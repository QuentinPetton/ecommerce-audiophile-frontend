import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { CategoriesComponent } from './categories/categories.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, CategoriesComponent],
  template: `
    <app-hero></app-hero>
    <app-categories></app-categories>
  `,
  styles: '',
})
export class HomeComponent {}
