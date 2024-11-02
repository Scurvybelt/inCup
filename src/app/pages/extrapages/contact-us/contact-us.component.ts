import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { EmailService } from "src/app/core/services/email.service";
// import { NotifierService } from 'angular-notifier';
import Swal from 'sweetalert2'

@Component({
    selector: "app-contact-us",
    templateUrl: "./contact-us.component.html",
    styleUrls: ["./contact-us.component.scss"],
})
export class ContactUsComponent {
    notifier: any;
    formCorreo: any;
    EnviarCorreo: boolean = false;


    constructor(private fb: FormBuilder,private serviceEmail: EmailService){//private notifier: NotifierService
        // this.notifier = notifier;
        this.formCorreo = this.fb.group({
          name: ['', [Validators.required]],
          email: ['', [Validators.required, Validators.email]],
          message: ['', [Validators.required]],
          tel: ['', [Validators.required]],
          asunto: ['', [Validators.required]]
        });
    }

    public showNotification( type: string, message: string ): void {
		this.notifier.notify( type, message );
	}

    mandarFormulario(){
        if(this.formCorreo.invalid){
            this.formCorreo.markAllAsTouched();
        }else{
            this.EnviarCorreo = true;            
            this.serviceEmail.sendEmail(this.formCorreo.value).subscribe(res => {
                // this.showNotification('success', 'Correo enviado correctamente');
                Swal.fire({
                    title: 'Correo Enviado!',
                    text: 'Espera una pronta respuesta de nuestro equipo',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                console.log('Correo enviado')
                this.EnviarCorreo = false;        
            },(error) => {
                Swal.fire({
                    title: 'Error al enviar el correo',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
                console.log('Error');
                // this.showNotification('error', 'Error al enviar el correo');
                this.EnviarCorreo = false;
            });
        }

        
    }
}
