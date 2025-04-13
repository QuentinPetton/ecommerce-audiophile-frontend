import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { CategoriesComponent } from './categories/categories.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, CategoriesComponent, FeaturedProductsComponent],
  template: `
    <app-hero></app-hero>
    <app-categories></app-categories>
    <app-featured-products> </app-featured-products>
  `,
  styles: '',
})
export class HomeComponent {}
