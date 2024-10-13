import { Component } from '@angular/core';
import { interval, map } from 'rxjs';

// Data Get
import { productdefualt } from './data';

@Component({
  selector: 'app-product-list-defualt',
  templateUrl: './product-list-defualt.component.html',
  styleUrls: ['./product-list-defualt.component.scss']
})
export class ProductListDefualtComponent {

  products: any;
  first: number = 1;
  endIndex: number = 10;

  rangeValues: number[] = [0, 2000];
  range1: any;
  range2: any;

  // set the current year
  private _trialEndsAt: any;
  private _diff?: any;
  _days?: number;
  _hours?: number;
  _minutes?: number;
  _seconds?: number;

  constructor() {
    this.products = productdefualt

    this.range1 = '$ ' + this.rangeValues[0]
    this.range2 = '$ ' + this.rangeValues[1]
  }

  ngOnInit(): void {

    // Date Set
    this._trialEndsAt = "2023-10-30";

    /**
     * Count date set
     */
    interval(1000).pipe(map((x) => {
      this._diff = Date.parse(this._trialEndsAt) - Date.parse(new Date().toString());
    })).subscribe((x) => {
      this._days = this.getDays(this._diff);
      this._hours = this.getHours(this._diff);
      this._minutes = this.getMinutes(this._diff);
      this._seconds = this.getSeconds(this._diff);
    });
  }

  // Range Slider
  handleChange(e: any) {
    this.range1 = '$ ' + e.values[0]
    this.range2 = '$ ' + e.values[1]

    for (let i = 0; i < productdefualt.length; i++) {
      this.products = productdefualt.filter((item: any) => {
        return item.price >= e.values[0] && item.price <= e.values[1]
      });
    }
  }

  // Pagination
  onPageChange(event: any) {
    this.first = event.first + 1;
    if (this.products.length > 0) {
      var last = this.first + event.rows
      if (last <= this.products.length) {
        this.endIndex = event.first + event.rows
      } else {
        this.endIndex = this.products.length
      }
    }
  }

  // Sorting
  onSortChange(event: any) {
    let value = event.target.value;
    if (value == 'low_to_high') {
      this.products.sort((a: any, b: any) => parseFloat(a.price) - parseFloat(b.price));
    } else if (value == 'high_to_low') {
      this.products.sort((a: any, b: any) => parseFloat(b.price) - parseFloat(a.price));
    } else {
      this.products = productdefualt;
    }
  }

  /**
  * Day Set
  */
  getDays(t: number) {
    return Math.floor(t / (1000 * 60 * 60 * 24));
  }

  /**
   * Hours Set
   */
  getHours(t: number) {
    return Math.floor((t / (1000 * 60 * 60)) % 24);
  }

  /**
   * Minutes set
   */
  getMinutes(t: number) {
    return Math.floor((t / 1000 / 60) % 60);
  }

  /**
   * Secound set
   */
  getSeconds(t: number) {
    return Math.floor((t / 1000) % 60);
  }


}
