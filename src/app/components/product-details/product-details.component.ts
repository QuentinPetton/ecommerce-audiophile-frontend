import { map, switchMap } from 'rxjs';
import { Component, inject } from '@angular/core';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductFeaturesComponent } from './product-features/product-features.component';
import { OtherProductComponent } from './other-product/other-product.component';
import { CategoriesComponent } from '../categories/categories.component';
import { AboutComponent } from '../home/about/about.component';

@Component({
  selector: 'app-product-details',
  imports: [
    ProductDescriptionComponent,
    ProductFeaturesComponent,
    OtherProductComponent,
    CategoriesComponent,
    AboutComponent,
  ],
  template: `
    <button class="mx-8 opacity-50 cursor-pointer md:mx-12 lg:mx-24">Go back</button>
    <app-product-description [productSignal]="product()!"></app-product-description>
    <app-product-features [productSignal]="product()!"></app-product-features>
    <app-other-product [productSignal]="product()!"></app-other-product>
    <app-categories></app-categories>
    <app-about></app-about>
  `,
  styles: '',
})
export class ProductDetailsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly productService = inject(ProductService);

  readonly product = toSignal(
    this.route.paramMap.pipe(
      map((params) => params.get('slug') as string),
      switchMap((slug) => this.productService.getProductBySlug(slug)),
    ),
  );
}
