import type { Routes } from '@angular/router';
import { HeroComponent } from './components/home/hero/hero.component';

export const routes: Routes = [
  {
    path: '',
    component: HeroComponent,
  },
];
