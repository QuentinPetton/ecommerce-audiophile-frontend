import { UpperCasePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { ProductDescriptionComponent } from '../../product-details/product-description/product-description.component';
import { CategoriesComponent } from '../categories.component';
import { AboutComponent } from '../../home/about/about.component';

@Component({
  selector: 'app-category-products',
  imports: [ProductDescriptionComponent, CategoriesComponent, AboutComponent, UpperCasePipe],
  template: `
    <h1 class="text-white p-6 bg-black text-center text-3xl pt-20 mb-16">
      {{ categorySlug() | uppercase }}
    </h1>
    @for (product of products(); track $index) {
      <app-product-description
        [displayStyle]="'categoryPage'"
        [productSignal]="product"
      ></app-product-description>
    }
    <app-categories></app-categories>
    <app-about></app-about>
  `,
  styles: '',
})
export class CategoryProductsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly productService = inject(ProductService);
  readonly categorySlug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') as string)),
  );
  readonly products = toSignal(
    this.route.paramMap.pipe(
      map((params) => params.get('slug') as string),
      switchMap((slug) => this.productService.getProductsByCategorySlug(slug)),
      map(
        // Sort to show new products first
        (products) => products.slice().sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0)),
      ),
    ),
  );
}
