import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';
import { Location } from '@angular/common'; // Importar Location
import Swal from 'sweetalert2'

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
  tipos: any;
  indices: any;
  categories: any;


  constructor(private fb: FormBuilder,private route: ActivatedRoute, private servicioProducto: ProductsService,private location: Location,private router: Router) {
    this.productoForm = this.initForm();
  }
  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.catalogos()
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
    this.servicioProducto.getProducById(id).subscribe((data: any) => {
      console.log(data);
      this.onPathValues(data);


    })
  }
  catalogos(){
    this.servicioProducto.getCatalogo('category').subscribe(data => {
      
      this.categories = data;
    })
    this.servicioProducto.getCatalogo('tipo').subscribe(data => {
      
      this.tipos = data
    })
    this.servicioProducto.getCatalogo('indice').subscribe(data => {
      
      this.indices = data;
    })
  }

  onPathValues(data:any){
    this.productoForm.patchValue({
      name: data[0].name,
      description: data[0].description,
      amount: data[0].amount,
      // price: data[0].price,
      category: data[0].category_id,
      tipo: data[0].tipo_id,
      indice: data[0].indice_id,
      img: data[0].img
    })
    console.log(this.productoForm.value)
  }

  initForm():FormGroup{
    return  this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      amount:  ['', Validators.required],
      // price:  ['', Validators.required],
      category: ['', Validators.required],
      tipo: ['', Validators.required],
      indice: ['',Validators.required],
      img: ['',Validators.required]
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

    if(this.productoForm.invalid){
      this.productoForm.markAllAsTouched();
      return;
    }
    if(this.id){
      //Editar
      // console.log(this.productoForm.value);

      let form = this.productoForm.value;
      form.id = this.id;
      // console.log(form);
      this.servicioProducto.updateProduct(form).subscribe((data => {
        console.log(data);
        let datos: any = data;
        if(datos[0] === 'success'){
          Swal.fire({
            title: 'Producto Actualizado',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
          this.router.navigate(['/auth/administrador']);
        }else{
          Swal.fire({
            title: 'Error',
            text: datos[1],
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }
      }))
    }else{
      //Crear
      this.servicioProducto.createProduct(this.productoForm.value).subscribe((data => {
        // console.log(data);
        let datos: any = data;
        if(datos[0] === 'error'){
          Swal.fire({
            title: 'Error',
            text: datos[1],
            icon: 'error',
            confirmButtonText: 'Ok'
          })
          
          
        }else{
          Swal.fire({
            title: 'Producto Creado',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
          this.router.navigate(['/auth/administrador']);
        }
       
      }))
    }
  }
  
  goBack(){
    this.location.back();
  }
}
