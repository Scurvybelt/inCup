import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ComingSoonComponent } from "./coming-soon/coming-soon.component";
import { Error404Component } from "./error404/error404.component";
import { Error500Component } from "./error500/error500.component";
import { LogoutBasicComponent } from "./logout-basic/logout-basic.component";
import { PassResetBasicComponent } from "./pass-reset-basic/pass-reset-basic.component";
import { SigninBasicComponent } from "./signin-basic/signin-basic.component";
import { SignupBasicComponent } from "./signup-basic/signup-basic.component";
import { SuccessMsgBasicComponent } from "./success-msg-basic/success-msg-basic.component";
import { TwostepBasicComponent } from "./twostep-basic/twostep-basic.component";
import { AltaBajaProductosComponent } from "./alta-baja-productos/alta-baja-productos.component";
import { FormularioCreacionEdicionComponent } from "./formulario-creacion-edicion/formulario-creacion-edicion.component";
import { authGuard } from "../auth.guard";

// component

const routes: Routes = [
  {
    path: "signin-basic",
    component: SigninBasicComponent,
  },
  {
    path: "signup-basic",
      component: SignupBasicComponent,
  },
  {
    path: "administrador",
    component: AltaBajaProductosComponent,
    canActivate: [authGuard]
  },
  {
    path: "formulario",//A esto falta que le pase el id
    component: FormularioCreacionEdicionComponent
  },
  {
    path: "formulario/:id",//A esto falta que le pase el id
    component: FormularioCreacionEdicionComponent
  },
  {
    path: "pass-reset-basic",
    component: PassResetBasicComponent,
  },
  {
    path: "success-msg-basic",
    component: SuccessMsgBasicComponent,
  },
  {
    path: "twostep-basic",
    component: TwostepBasicComponent,
  },
  {
    path: "logout-basic",
    component: LogoutBasicComponent,
  },
  {
    path: "error404",
    component: Error404Component,
  },
  {
    path: "error500",
    component: Error500Component,
  },
  {
    path: "coming-soon",
    component: ComingSoonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
