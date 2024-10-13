import { Component } from "@angular/core";

// Data Get
import { productGrid } from "./data";

@Component({
  selector: "app-product-grid-right",
  templateUrl: "./product-grid-right.component.html",
  styleUrls: ["./product-grid-right.component.scss"],
})

// Product Grid Right Component
export class ProductGridRightComponent {
  products: any;
  rangeValues: number[] = [0, 2000];
  range1: any;
  range2: any;
  first: number = 1;
  endIndex: number = 12;

  sortOptions: any;
  sortOrder: any;
  sortField: any;

  loading: boolean = true;

  ngOnInit(): void {
    // Fetch Data
    this.products = productGrid;

    this.range1 = "$ " + this.rangeValues[0];
    this.range2 = "$ " + this.rangeValues[1];
  }

  // Range Slider
  handleChange(e: any) {
    this.range1 = "$ " + e.values[0];
    this.range2 = "$ " + e.values[1];

    for (let i = 0; i < productGrid.length; i++) {
      this.products = productGrid.filter((item: any) => {
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
      this.products = productGrid;
    }
  }

  setprice(ev: any) {
    console.log(ev);
  }
}
