import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule, UpperCasePipe],
  template: `
    <main>
      <h1>{{ 'Checkout' | uppercase }}</h1>
      <form [formGroup]="checkoutForm">
        <section>
          <h2>{{ 'Billing details' | uppercase }}</h2>
          <div>
            <label for="name">Name</label>
            <input type="text" formControlName="name" placeholder="Name" />
            <label for="email">Email</label>
            <input type="email" formControlName="email" placeholder="Email" />
            <label for="phone">Phone Number</label>
            <input type="tel" formControlName="phone" placeholder="+1(202) 555-0136" />
          </div>
        </section>
      </form>
    </main>
  `,
  styles: '',
})
export class CheckoutComponent {
  readonly checkoutForm = new FormGroup({});
}
