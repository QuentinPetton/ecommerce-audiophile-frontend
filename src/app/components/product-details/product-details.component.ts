import { map, filter, switchMap } from 'rxjs';
import { Component, inject } from '@angular/core';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-details',
  imports: [ProductDescriptionComponent],
  template: `
    <p>product-details works!</p>
    <app-product-description></app-product-description>
  `,
  styles: '',
})
export class ProductDetailsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly productService = inject(ProductService);

  private readonly product = toSignal(
    this.route.paramMap.pipe(
      map((params) => params.get('slug') as string),
      switchMap((slug) => this.productService.getProductBySlug(slug)),
    ),
  );
}
