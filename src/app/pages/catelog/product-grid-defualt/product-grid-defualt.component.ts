import { Component } from "@angular/core";

// Data Get
import { productdata } from "../product-grid-sidebar-banner/data";

@Component({
  selector: "app-product-grid-defualt",
  templateUrl: "./product-grid-defualt.component.html",
  styleUrls: ["./product-grid-defualt.component.scss"],
})
export class ProductGridDefualtComponent {
  products: any;
  first: number = 1;
  endIndex: number = 9;

  rangeValues: number[] = [0, 2000];
  range1: any;
  range2: any;

  sortOptions: any;
  sortOrder: any;
  sortField: any;

  ngOnInit(): void {
    this.products = productdata;
    this.range1 = "$ " + this.rangeValues[0];
    this.range2 = "$ " + this.rangeValues[1];
  }

  // Range Slider
  handleChange(e: any) {
    this.range1 = "$ " + e.values[0];
    this.range2 = "$ " + e.values[1];

    for (let i = 0; i < productdata.length; i++) {
      this.products = productdata.filter((item: any) => {
        return item.price >= e.values[0] && item.price <= e.values[1];
      });
    }
  }

  // Pagination
  onPageChange(event: any) {
    this.first = event.first + 1;
    if (this.products.length > 0) {
      var last = this.first + event.rows;
      if (last <= this.products.length) {
        this.endIndex = event.first + event.rows;
      } else {
        this.endIndex = this.products.length;
      }
    }
  }

  // Sorting
  onSortChange(event: any) {
    let value = event.target.value;
    if (value == "low_to_high") {
      this.products.sort((a: any, b: any) => parseFloat(a.price) - parseFloat(b.price));
    } else if (value == "high_to_low") {
      this.products.sort((a: any, b: any) => parseFloat(b.price) - parseFloat(a.price));
    } else {
      this.products = productdata;
    }
    console.log(this.products);
  }
}
