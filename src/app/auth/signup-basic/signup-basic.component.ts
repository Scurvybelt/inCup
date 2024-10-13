import { Component } from "@angular/core";

@Component({
    selector: "app-signup-basic",
    templateUrl: "./signup-basic.component.html",
    styleUrls: ["./signup-basic.component.scss"],
})
export class SignupBasicComponent {
    fieldTextType!: boolean;

    /**
     * Password Hide/Show
     */
    toggleFieldTextType() {
        this.fieldTextType = !this.fieldTextType;
    }

}
