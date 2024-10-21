import { Component } from '@angular/core';
import { LoginHeaderComponent } from 'src/app/shared/login-header/login-header.component';
import { ProductsService } from '../../core/services/products.service'; // Adjust the path as necessary

@Component({
  selector: 'app-alta-baja-productos',
  templateUrl: './alta-baja-productos.component.html',
  styleUrl: './alta-baja-productos.component.scss'
})
export class AltaBajaProductosComponent {
  productos: any;

  constructor(private productService: ProductsService) {

  }
  ngOnInit(){
    this.productService.getProducts().subscribe((data: any) => {
      console.log(data);
      this.productos = data;
    })
  }
}
