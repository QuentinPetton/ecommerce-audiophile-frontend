import { Component, inject } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { ProductDescriptionComponent } from '../../../product-details/product-description/product-description.component';

@Component({
  selector: 'app-category-products',
  imports: [ProductDescriptionComponent],
  template: `
    @for (product of products(); track $index) {
      <app-product-description [productSignal]="product"></app-product-description>
    }
  `,
  styles: '',
})
export class CategoryProductsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly productService = inject(ProductService);
  readonly products = toSignal(
    this.route.paramMap.pipe(
      map((params) => params.get('slug') as string),
      switchMap((slug) => this.productService.getProductsByCategorySlug(slug)),
    ),
  );
  //TODO: isoler productDescription button pour avoir un see more depuis catégories
}
