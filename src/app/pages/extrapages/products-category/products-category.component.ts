import { Component } from "@angular/core";

@Component({
  selector: "app-products-category",
  templateUrl: "./products-category.component.html",
  styleUrls: ["./products-category.component.scss"],
})
export class ProductsCategoryComponent {
  // Products Slider
  products = [
    {
      id: "1",
      img: "assets/images/products/img-15.png",
      name: "Handbags & Clutches",
      bgcolor: "dark",
    },
    {
      id: "2",
      img: "assets/images/products/img-17.png",
      name: "Electronics",
      bgcolor: "dark",
    },
    {
      id: "3",
      img: "assets/images/products/img-4.png",
      name: "Footwear",
      bgcolor: "success",
    },
    {
      id: "4",
      img: "assets/images/products/img-12.png",
      name: "Furniture & Decore",
      bgcolor: "danger",
    },
    {
      id: "5",
      img: "assets/images/products/img-18.png",
      name: "Beauty, Health, Grocery",
      bgcolor: "warning",
    },
    {
      id: "6",
      img: "assets/images/products/img-9.png",
      name: "Men's Accessories",
      bgcolor: "dark",
    },
  ];
}
