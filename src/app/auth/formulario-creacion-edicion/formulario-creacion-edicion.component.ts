import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';


@Component({
  selector: 'app-formulario-creacion-edicion',
  templateUrl: './formulario-creacion-edicion.component.html',
  styleUrl: './formulario-creacion-edicion.component.scss'
})
export class FormularioCreacionEdicionComponent {
  id: any;
  titulo: string = '';
  
  productoForm: FormGroup;
  edicion: boolean = false;


  constructor(private fb: FormBuilder,private route: ActivatedRoute, private servicioProducto: ProductsService) {
    this.productoForm = this.initForm();
  }
  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id){
      this.edicion = true;
      console.log('Editar producto');
      this.titulo = 'Editar producto';
      this.loadProductDataById(this.id);
    }else{
      console.log('Crear producto');
      this.titulo = 'Crear producto';
    }
  }

  loadProductDataById(id: any){
    this.servicioProducto.getProducById(this.id).subscribe((data: any) => {
      console.log(data);
      this.onPathValues(data);

    })
  }

  onPathValues(data:any){
    this.productoForm.patchValue({
      name: data[0].name,
      description: data[0].description,
      amount: data[0].amount,
      price: data[0].price,
      img: data[0].img
    })
    console.log(this.productoForm.value)
  }

  initForm():FormGroup{
    return  this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      amount:  ['', Validators.required],
      price:  ['', Validators.required],
      img: ['']
    })
  }
  onFileSelected(event:any){
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const preview = document.getElementById('preview') as HTMLImageElement;
        preview.src = e.target.result;
        this.productoForm.patchValue({ img: e.target.result });
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  onSubmit(){
    if(this.id){
      //Editar
    }else{
      //Crear
      console.log(this.productoForm.value);
      this.servicioProducto.createProduct(this.productoForm.value).subscribe((data => {
        console.log(data);
      }))
    }
  }
}
