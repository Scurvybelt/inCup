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
  filtroProductos: Array<any> = [];

  constructor(private productService: ProductsService,private router: Router,) {

  }
  ngOnInit(){
    this.getProductos();
    
  }

  getProductos(){
    this.productService.getProducts().subscribe((data: any) => {
      // console.log(data);
      this.productos = data;
      console.log(data);
      this.filtroProductos = this.productos;
      
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

    Swal.fire({
      title: "Quieres eliminar este producto " + producto.name,
      text: "No podras revertir el cambio",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.deleteProduct(producto.id).subscribe((data:any) => {
          Swal.fire({
            title: 'Producto Elimiando!',
            text: "Se elimino el producto",
            icon: "success"
          });
          this.getProductos();
        })
      }
    });


    // const confirmacion = confirm(`¿Está seguro de que quiere eliminar el producto con el nombre: ${producto.name}?`);
    // if(confirmacion){
    //   this.productService.deleteProduct(producto.id).subscribe((data:any) => {
    //     // console.log(data);
    //     Swal.fire({
    //       title: 'Producto Elimiando!',
    //       icon: 'success',
    //       confirmButtonText: 'Ok'
    //     })
    //     this.getProductos();
    //   })


    // }else{
    // }
  }

  buscarPalabra(e: any){
    
    if(!e){
      this.filtroProductos = this.productos;
    }else{
      const palabraMinuscula = e.toLowerCase();
      this.filtroProductos = this.productos.filter((producto:any) => {
        return producto.name.toLowerCase().includes(palabraMinuscula)
      })
      if(this.filtroProductos.length == 0){
        console.log('No se encontro resultados')
      }
      //no se encontro resultados
    }
  }
}
