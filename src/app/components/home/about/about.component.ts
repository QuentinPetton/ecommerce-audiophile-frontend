import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [UpperCasePipe],
  template: `
    <section class="mx-8 text-center my-28">
      <img
        src="/assets/shared/desktop/image-best-gear.jpg"
        alt="man listening music with headphones"
        class="rounded-lg"
      />

      <h4 class="text-2xl font-semibold my-6 mx-4">
        {{ 'Bringing you the' | uppercase }}
        <span class="text-orange">{{ 'best' | uppercase }}</span>
        {{ 'audio gear' | uppercase }}
      </h4>
      <p class="opacity-50 text-sm">
        Located at the heart of New York City, Audiophile is the premier store for high end
        headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury
        demonstration rooms available for you to browse and experience a wide range of our products.
        Stop by our store to meet some of the fantastic people who make Audiophile the best place to
        buy your portable audio equipment.
      </p>
    </section>
  `,
  styles: [''],
})
export class AboutComponent {}
