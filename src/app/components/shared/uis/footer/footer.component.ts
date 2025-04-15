import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-footer',
  imports: [NavbarComponent],
  template: ` <p>footer works!</p>

    <app-navbar></app-navbar>`,
  styles: '',
})
export class FooterComponent {}
