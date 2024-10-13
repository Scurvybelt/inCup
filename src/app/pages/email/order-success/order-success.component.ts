import { Component } from "@angular/core";

@Component({
  selector: "app-order-success",
  templateUrl: "./order-success.component.html",
  styleUrls: ["./order-success.component.scss"],
})
export class OrderSuccessComponent {
  year: number = new Date().getFullYear();
}
