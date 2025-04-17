import { map, switchMap } from 'rxjs';
import { Component, inject } from '@angular/core';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductFeaturesComponent } from './product-features/product-features.component';

@Component({
  selector: 'app-product-details',
  imports: [ProductDescriptionComponent, ProductFeaturesComponent],
  template: `
    <button class="mx-8 opacity-50 cursor-pointer">Go back</button>
    <app-product-description [productSignal]="product()!"></app-product-description>
    <app-product-features [productSignal]="product()!"></app-product-features>
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
