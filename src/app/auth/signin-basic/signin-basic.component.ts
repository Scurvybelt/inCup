import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UsuarioService } from "src/app/core/services/usuario.service";
// import Notiflix from 'notiflix';

@Component({
    selector: "app-signin-basic",
    templateUrl: "./signin-basic.component.html",
    styleUrls: ["./signin-basic.component.scss"],
})
export class SigninBasicComponent implements OnInit {
    fieldTextType!: boolean;
formularioSesion: FormGroup<any>;
    respuesta: any;
    constructor(private router: Router,private usuarioService: UsuarioService) {
        this.formularioSesion = new FormGroup({
            usuario: new FormControl("", [Validators.required]),
            password: new FormControl("", [Validators.required]),
        });
    }

    ngOnInit(){
        const usuario = localStorage.getItem('usuario');
        if (usuario) {
            this.router.navigate(['/auth/administrador']);
        }
    }
    /**
     * Password Hide/Show
     */
    toggleFieldTextType() {
        this.fieldTextType = !this.fieldTextType;
    }

    enviarFormulario(){
        // console.log(this.formularioSesion.value);
        let form = {
            usuario: this.formularioSesion.value.usuario,
            password: this.formularioSesion.value.password
        }
        //Servicio para comprobar si esta bien el usuario y la contraseña
        this.usuarioService.findUser(form.usuario,form.password).subscribe((res: any) => {
            // console.log(res);
            if(res.length > 1){
                //Error
                this.respuesta = res[1];
                // console.log(this.respuesta);
            }else{
                localStorage.setItem('usuario', form.usuario);
                this.router.navigate(['/auth/administrador']);
                // Notiflix.notify.success('Inicio de Sesión')
            }
            // if(this.respuesta)
        })        
        // 
    }

    

}
