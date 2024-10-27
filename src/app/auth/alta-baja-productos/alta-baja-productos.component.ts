import { Component } from '@angular/core';
import { LoginHeaderComponent } from 'src/app/shared/login-header/login-header.component';
import { ProductsService } from '../../core/services/products.service'; // Adjust the path as necessary
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-alta-baja-productos',
  templateUrl: './alta-baja-productos.component.html',
  styleUrl: './alta-baja-productos.component.scss'
})
export class AltaBajaProductosComponent {
  productos: Array<any> = [];
  noHayProductos: string = '';

  constructor(private productService: ProductsService,private router: Router,) {

  }
  ngOnInit(){
    this.getProductos();
    
  }

  getProductos(){
    this.productService.getProducts().subscribe((data: any) => {
      console.log(data);
      this.productos = data;
      
      this.hayProductos();
      
    })
  }

  hayProductos(){
    if( this.productos.length === 0){
      this.noHayProductos = 'No hay productos';
    }else{
      this.noHayProductos = '';
    }
  }

  eliminar(producto: any){
    const confirmacion = confirm(`¿Está seguro de que quiere eliminar el producto con el nombre: ${producto.name}?`);
    if(confirmacion){
      this.productService.deleteProduct(producto.id).subscribe((data:any) => {
        // console.log(data);
        Swal.fire({
          title: 'Producto Elimiando!',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        this.getProductos();
      })


    }else{
    }
  }
}
