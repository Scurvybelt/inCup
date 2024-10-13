import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// page Route
import { AuthRoutingModule } from "./auth-routing.module";
import { SharedModule } from "../shared/shared.module";
// otp module
import { NgOtpInputModule } from 'ng-otp-input';
// Component
import { SigninBasicComponent } from "./signin-basic/signin-basic.component";
import { SignupBasicComponent } from "./signup-basic/signup-basic.component";
import { PassResetBasicComponent } from "./pass-reset-basic/pass-reset-basic.component";
import { PassChangeBasicComponent } from "./pass-change-basic/pass-change-basic.component";
import { SuccessMsgBasicComponent } from "./success-msg-basic/success-msg-basic.component";
import { TwostepBasicComponent } from "./twostep-basic/twostep-basic.component";
import { LogoutBasicComponent } from "./logout-basic/logout-basic.component";
import { Error404Component } from "./error404/error404.component";
import { Error500Component } from "./error500/error500.component";
import { ComingSoonComponent } from "./coming-soon/coming-soon.component";

@NgModule({
  declarations: [
    SigninBasicComponent,
    SignupBasicComponent,
    PassResetBasicComponent,
    PassChangeBasicComponent,
    SuccessMsgBasicComponent,
    TwostepBasicComponent,
    LogoutBasicComponent,
    Error404Component,
    Error500Component,
    ComingSoonComponent,

  ],
  imports: [CommonModule, AuthRoutingModule, SharedModule, NgOtpInputModule],
})
export class AuthModule { }
