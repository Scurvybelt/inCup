import { Component } from "@angular/core";

@Component({
  selector: "app-login-footer",
  templateUrl: "./login-footer.component.html",
  styleUrls: ["./login-footer.component.scss"],
})
export class LoginFooterComponent {
  // set the currenr year
  year: number = new Date().getFullYear();
}
