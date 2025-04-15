import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-footer',
  imports: [NavbarComponent],
  template: `
    <footer
      class="relative bg-black text-white text-center flex flex-col items-center justify-center gap-6 px-8 py-10"
    >
      <div class="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-25 bg-orange"></div>
      <img
        class="pb-4 cursor-pointer"
        src="/assets/shared/desktop/logo.svg"
        alt="logo audiophile"
      />
      <app-navbar></app-navbar>
      <p class="opacity-50 text-sm">
        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music
        lovers and sound specialists who are devoted to helping you get the most out of personal
        audio. Come and visit our demo facility - we’re open 7 days a week.
      </p>
      <p class="opacity-50 text-sm py-4">Copyright 2021. All Rights Reserved</p>
      <div class="flex gap-4 ">
        <img src="/assets/shared/desktop/icon-facebook.svg" alt="logo facebook" />
        <img src="/assets/shared/desktop/icon-twitter.svg" alt="logo twitter" />
        <img src="/assets/shared/desktop/icon-instagram.svg" alt="logo instagram" />
      </div>
    </footer>
  `,
  styles: '',
})
export class FooterComponent {}
