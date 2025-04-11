import { type ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, type Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [{ path: '', component: HomeComponent }];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
  ],
};
