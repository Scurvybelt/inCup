import { Component } from "@angular/core";

// Data Get
import { productGrid } from "../product-grid-right/data";

@Component({
    selector: "app-product-grid",
    templateUrl: "./product-grid.component.html",
    styleUrls: ["./product-grid.component.scss"],
})
export class ProductGridComponent {
    products: any;
    rating: any;
    discount: any;

    first: number = 1;
    endIndex: number = 12;

    rangeValues: number[] = [0, 2000];
    range1: any;
    range2: any;

    sortOptions: any;
    sortOrder: any;
    sortField: any;

    constructor() {
        this.rating = [
            { name: "4 & Above", value: "4" },
            { name: "3 & Above", value: "3" },
            { name: "2 & Above", value: "2" },
            { name: "1", value: "1" },
        ];

        this.discount = [
            { name: "50% or more", value: "50" },
            { name: "40% or more", value: "40" },
            { name: "30% or more", value: "30" },
            { name: "20% or more", value: "20" },
            { name: "10% or more", value: "10" },
        ];
    }

    ngOnInit(): void {
        this.products = productGrid;
        this.range1 = "$ " + this.rangeValues[0];
        this.range2 = "$ " + this.rangeValues[1];
    }

    // Range Slider
    handleChange(e: any) {
        this.range1 = "$ " + e.values[0];
        this.range2 = "$ " + e.values[1];
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
}
