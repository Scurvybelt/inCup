import { Component } from "@angular/core";

@Component({
    selector: "app-ecommerce-faq",
    templateUrl: "./ecommerce-faq.component.html",
    styleUrls: ["./ecommerce-faq.component.scss"],
})
export class EcommerceFaqComponent {
    ngOnInIt(): void {
        document.documentElement.setAttribute("data-footer", "light");
    }
}
