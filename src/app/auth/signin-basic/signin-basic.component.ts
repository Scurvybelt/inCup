import { Component } from "@angular/core";

@Component({
    selector: "app-signin-basic",
    templateUrl: "./signin-basic.component.html",
    styleUrls: ["./signin-basic.component.scss"],
})
export class SigninBasicComponent {
    fieldTextType!: boolean;

    /**
     * Password Hide/Show
     */
    toggleFieldTextType() {
        this.fieldTextType = !this.fieldTextType;
    }

}
