import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: "app-signin-basic",
    templateUrl: "./signin-basic.component.html",
    styleUrls: ["./signin-basic.component.scss"],
})
export class SigninBasicComponent {
    fieldTextType!: boolean;
formularioSesion: FormGroup<any>;
    constructor(private router: Router) {
        this.formularioSesion = new FormGroup({
            usuario: new FormControl("", [Validators.required]),
            password: new FormControl("", [Validators.required]),
        });
    }
    /**
     * Password Hide/Show
     */
    toggleFieldTextType() {
        this.fieldTextType = !this.fieldTextType;
    }

    enviarFormulario(){
        console.log(this.formularioSesion.value);
        //Servicio para comprobar si esta bien el usuario y la contraseña
        this.router.navigate(['/auth/administrador']);
    }





}
