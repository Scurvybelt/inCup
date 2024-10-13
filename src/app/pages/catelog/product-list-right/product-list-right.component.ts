import { Component } from "@angular/core";

// Data Get
import { productlist } from "../product-list/data";

@Component({
  selector: "app-product-list-right",
  templateUrl: "./product-list-right.component.html",
  styleUrls: ["./product-list-right.component.scss"],
})
export class ProductListRightComponent {
  products: any;

  rangeValues: number[] = [0, 2000];
  range1: any;
  range2: any;

  sortOptions: any;
  sortOrder: any;
  sortField: any;

  constructor() {
    this.products = productlist;
    this.range1 = "$ " + this.rangeValues[0];
    this.range2 = "$ " + this.rangeValues[1];
  }

  handleChange(e: any) {
    this.range1 = "$ " + e.values[0];
    this.range2 = "$ " + e.values[1];

    for (let i = 0; i < productlist.length; i++) {
      this.products = productlist.filter((item: any) => {
        return item.price >= e.values[0] && item.price <= e.values[1];
      });
    }
  }

  ngOnInit() {
    console.log(this.products)
    this.sortOptions = [
      { label: "All", value: "" },
      { label: "Price High to Low", value: "price" },
      { label: "Price Low to High", value: "!price" },
    ];
  }

  // sorting
  onSortChange(event: any) {
    let value = event.target.value;
    console.log(value);
    if (value == "low_to_high") {
      this.products.sort((a: any, b: any) => parseFloat(a.price) - parseFloat(b.price));
    } else if (value == "high_to_low") {
      this.products.sort((a: any, b: any) => parseFloat(b.price) - parseFloat(a.price));
    } else {
      this.products = productlist;
    }
  }

}
