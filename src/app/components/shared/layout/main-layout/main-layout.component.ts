import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from '../../uis/menu/menu.component';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, MenuComponent],
  template: ` <app-menu></app-menu>
    <router-outlet></router-outlet>`,
  styles: '',
})
export class MainLayoutComponent {}
