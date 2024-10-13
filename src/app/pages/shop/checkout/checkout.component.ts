import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

    // bread crumb items
    breadCrumbItems!: Array<{}>;

    ngOnInit(): void {
      /**
       * BreadCrumb
      */
      this.breadCrumbItems = [
        { label: 'Shop' },
        { label: 'Checkout', active: true }
      ];
    }
  
}
