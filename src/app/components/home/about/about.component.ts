import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [UpperCasePipe],
  template: `
    <section
      class="mx-8 text-center my-28 md:my-16 lg:mx-20 lg:grid lg:grid-cols-2 lg:text-left lg:gap-6 lg:items-center lg:py-12"
    >
      <picture class="lg:col-start-2">
        <source
          srcset="/assets/shared/desktop/image-best-gear.jpg"
          media="(min-width: 1024px)"
          class="rounded-lg"
        />
        <source
          srcset="/assets/shared/tablet/image-best-gear.jpg"
          media="(min-width: 768px)"
          class="rounded-lg"
        />
        <img
          src="/assets/shared/mobile/image-best-gear.jpg"
          alt="man listening music with headphones"
          class="rounded-lg"
        />
      </picture>
      <div class="lg:col-start-1 lg:row-start-1 lg:max-w-lg lg:pr-22 ">
        <h4 class="text-2xl font-semibold my-6 mx-4 md:text-3xl md:mx-32 md:mt-12 lg:mx-0 lg:mt-0">
          {{ 'Bringing you the' | uppercase }}
          <span class="text-orange">{{ 'best' | uppercase }}</span>
          {{ 'audio gear' | uppercase }}
        </h4>
        <p class="opacity-50 text-sm md:mx-20 lg:mx-0">
          Located at the heart of New York City, Audiophile is the premier store for high end
          headphones, earphones, speakers, and audio accessories. We have a large showroom and
          luxury demonstration rooms available for you to browse and experience a wide range of our
          products. Stop by our store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  `,
  styles: [''],
})
export class AboutComponent {}
