import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../uis/header/header.component';
import { FooterComponent } from '../../uis/footer/footer.component';
import { CartOpenComponent } from '../../uis/header/cart-open.component';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CartOpenComponent],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
    @if (cartService.isCartOpen()) {
      <div (click)="cartService.toggleCart()" class="fixed inset-0 bg-black/50 z-40"></div>
      <app-cart-open></app-cart-open>
    }
  `,
  styles: '',
})
export class MainLayoutComponent {
  readonly cartService = inject(CartService);
}
