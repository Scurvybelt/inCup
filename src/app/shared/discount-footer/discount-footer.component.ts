import { Component, Input } from "@angular/core";

@Component({
  selector: "app-discount-footer",
  templateUrl: "./discount-footer.component.html",
  styleUrls: ["./discount-footer.component.scss"],
})
export class DiscountFooterComponent {
  @Input()
  discount: any;
}
