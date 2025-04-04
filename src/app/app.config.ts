import { type ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, type Routes } from '@angular/router';
import { HeroComponent } from './components/home/hero/hero.component';
import { provideHttpClient } from '@angular/common/http';

export const routes: Routes = [{ path: '', component: HeroComponent }];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
  ],
};
