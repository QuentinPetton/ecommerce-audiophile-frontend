import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule, UpperCasePipe, OrderSummaryComponent],
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
        <section>
          <h2>{{ 'Shipping Info' | uppercase }}</h2>
          <div>
            <label for="address">Address</label>
            <input type="text" id="address" placeholder="1137 Williams Avenue" />
            <label for="zip">ZIP Code</label>
            <input type="text" id="zip" placeholder="10001" />
            <label for="city">City</label>
            <input type="text" id="city" placeholder="New York" />
            <label for="country">Country</label>
            <input type="text" id="country" placeholder="United States" />
          </div>
        </section>
        <section>
          <h2>{{ 'Shipping Info' | uppercase }}</h2>
          <div>
            <label for="payement_method">Payement Method</label>
            <input type="radio" id="e-money" name="payement_method" checked />
            <label for="e-money">e-Money</label>
            <input type="radio" id="cash" name="payement_method" />
            <label for="cash">Cash on Delivery</label>
            <p>
              The 'Cash on Delivery' option enables you to pay in cash when our delivery courier
              arrives at your residence. Just make sure your address is correct so that your order
              will not be cancelled.
            </p>
          </div>
        </section>
      </form>
      <app-order-summary></app-order-summary>
    </main>
  `,
  styles: '',
})
export class CheckoutComponent {
  readonly checkoutForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
    adress: new FormControl('', [Validators.required]),
    zip: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    payement_method: new FormControl('e-money', [Validators.required]),
  });
}
