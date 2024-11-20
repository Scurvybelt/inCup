import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environmentLocal } from 'src/environments/environment';


const BASE_URL = environmentLocal.api;
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(private http: HttpClient) { }


  getProducts() {
    return this.http.get(`${BASE_URL}`);
  }

  getProducById(id: any){
    return this.http.get(`${BASE_URL}?id=${id}`);
  }

  // setProduct(product: any){
  //   return this.http.post(`${BASE_URL}`, product);
  // }

  deleteProduct(id: any){
    return this.http.delete(`${BASE_URL}`, {
      body: { id: id}
    });
  }

  createProduct(product: any){
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${BASE_URL}/crearProducto`, product);
      // body: {
      //   name: product.name,
      //   description: product.description,
      //   price: product.price,
      //   amount: product.amount,
      //   img: product.img
      // }
  }


  updateProduct(product: any){
    return this.http.put(`${BASE_URL}`,product);
  }

  getCatalogo(catalog:any){
    return this.http.get(`${BASE_URL}?catalogo=${catalog}`)
  }

  getProductsFileter(filter: any){
    return this.http.get(`${BASE_URL}/filter/?category=${filter.category}&price=${filter.price}&name=${filter.name}`);
  }



  
}  
