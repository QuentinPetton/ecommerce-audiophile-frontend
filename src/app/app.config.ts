import { provideZoneChangeDetection, type ApplicationConfig } from '@angular/core';
import { provideRouter, type Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { MainLayoutComponent } from './components/shared/layout/main-layout/main-layout.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { isProductExistGuard } from './guards/is-product-exist.guard';
import { CategoryProductsComponent } from './components/home/categories/category-products/category-products.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'product/:slug',
        component: ProductDetailsComponent,
        canActivate: [isProductExistGuard],
      },
      {
        path: 'category/:slug',
        component: CategoryProductsComponent,
        //todo : add isCategoryExistGuard
      },
    ],
  },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
  ],
};
