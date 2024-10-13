import { Component } from "@angular/core";

@Component({
    selector: "app-twostep-basic",
    templateUrl: "./twostep-basic.component.html",
    styleUrls: ["./twostep-basic.component.scss"],
})
export class TwostepBasicComponent {
    /**
* Confirm Otp Verification
*/
    config = {
        allowNumbersOnly: true,
        length: 4,
        isPasswordInput: false,
        disableAutoFocus: false,
        placeholder: '',
        inputStyles: {
            'width': '95px',
            'height': '50px'
        }
    };

}
