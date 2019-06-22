import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../service/list';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'cart-component',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class CartComponent implements OnInit {
    items;
    prices;
    checkoutForm;
    constructor(
        private cartService: LocationService,
        private formBuilder: FormBuilder
    ) {
        this.items = this.cartService.getItems();
        this.prices = this.cartService.getPrice();
        this.checkoutForm = this.formBuilder.group({
            name: '',
            address: ''
          });
    }

    ngOnInit() {

    }

    onSubmit(customerData) {
        // Process checkout data here
        console.warn('Your order has been submitted', customerData);
     
        // this.items = this.cartService.clearCart();
        this.checkoutForm.reset();
      }
}