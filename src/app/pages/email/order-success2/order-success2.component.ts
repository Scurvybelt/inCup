import { Component } from "@angular/core";

@Component({
    selector: "app-order-success2",
    templateUrl: "./order-success2.component.html",
    styleUrls: ["./order-success2.component.scss"],
})
export class OrderSuccess2Component {
    year: number = new Date().getFullYear();
}
