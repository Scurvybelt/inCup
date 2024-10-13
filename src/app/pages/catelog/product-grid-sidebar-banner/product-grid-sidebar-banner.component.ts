import { Component } from '@angular/core';
import { Observable, interval, map } from 'rxjs';

// Data Get
import { productdata } from './data';
import { productsModel } from './product-grid-sidebar-banner.model';

@Component({
  selector: 'app-product-grid-sidebar-banner',
  templateUrl: './product-grid-sidebar-banner.component.html',
  styleUrls: ['./product-grid-sidebar-banner.component.scss']
})
export class ProductGridSidebarBannerComponent {

  productsList!: productsModel[];
  // products: any;
  first: number = 1;
  endIndex: number = 12;
  rangeValues: number[] = [0, 2000];
  range1: any;
  range2: any;

  sortOptions: any;
  sortOrder: any;
  sortField: any;


  // set the current year
  private _trialEndsAt: any;
  private _diff?: any;
  _days?: number;
  _hours?: number;
  _minutes?: number;
  _seconds?: number;

  layout: string = 'list';

  products!: any[];

  ngOnInit(): void {

    // Fetch Data
    this.products = productdata;
    console.log('this.products => ', this.products)
    this.range1 = '$ ' + this.rangeValues[0]
    this.range2 = '$ ' + this.rangeValues[1]

    // Soting Dropdown
    this.sortOptions = [
      { label: 'All', value: '' },
      { label: 'Price High to Low', value: 'price' },
      { label: 'Price Low to High', value: '!price' }
    ];

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

    for (let i = 0; i < productdata.length; i++) {
      this.products = productdata.filter((item: any) => {
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
      this.products = productdata;
    }
    console.log(this.products)
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
