import { Component } from '@angular/core';

// Data Get
import { cartdata } from './data';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss']
})
export class ShopCartComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  shopcart: any;
  total: any;
  subtotal: any = 0;
  totalsum: any;
  taxRate: any = 0.125;
  shippingRate: any = '65.00';
  discountRate: any = 0.15;
  discount: any;
  tax: any;
  display: boolean = false;
  deletecart_id: any;

  ngOnInit(): void {
    /**
     * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Shop' },
      { label: 'Shopping Cart', active: true }
    ];

    // Fetch Data
    this.shopcart = cartdata
    this.shopcart.map((x: any) => {
      x['total'] = (x['qty'] * x['price']).toFixed(2)
      this.subtotal += parseFloat(x['total'])
    })
    this.subtotal = this.subtotal.toFixed(2)
    this.discount = (this.subtotal * this.discountRate).toFixed(2)
    this.tax = (this.subtotal * this.taxRate).toFixed(2);
    this.totalsum = (parseFloat(this.subtotal) + parseFloat(this.tax) + parseFloat(this.shippingRate) - parseFloat(this.discount)).toFixed(2)
  }

  // Increment Decrement Quantity
  qty: number = 0;
  increment(qty: any, i: any, id: any) {
    this.subtotal = 0;
    if (id == '0' && qty > 1) {
      qty--;
      this.shopcart[i].qty = qty
      this.shopcart[i].total = (this.shopcart[i].qty * this.shopcart[i].price).toFixed(2)
    }
    if (id == '1') {
      qty++;
      this.shopcart[i].qty = qty
      this.shopcart[i].total = (this.shopcart[i].qty * this.shopcart[i].price).toFixed(2)
    }

    this.shopcart.map((x: any) => {
      this.subtotal += parseFloat(x['total'])
    })

    this.subtotal = this.subtotal.toFixed(2)
    this.discount = (this.subtotal * this.discountRate).toFixed(2)
    this.tax = (this.subtotal * this.taxRate).toFixed(2);
    this.totalsum = (parseFloat(this.subtotal) + parseFloat(this.tax) + parseFloat(this.shippingRate) - parseFloat(this.discount)).toFixed(2)
  }

  // Delet Modal
  showDialog(id: any) {
    this.deletecart_id = id
    this.display = true;
  }

  // Delete cart
  deleteCart() {
    this.shopcart.splice(this.deletecart_id, 1)
    this.display = false;
  }



}
