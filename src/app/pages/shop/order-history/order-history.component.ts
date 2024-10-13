import { Component } from '@angular/core';

// Data Get
import { orderhistory } from './data';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  orderdata: any;

  ngOnInit(): void {
    /**
     * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Shop' },
      { label: 'Order History', active: true }
    ];

    this.orderdata = orderhistory
  }

  display: boolean = false;

  showDialog() {
    this.display = true;
  }
}
