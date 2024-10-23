import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  setProduct(product: any){
    return this.http.post(`${BASE_URL}`, product);
  }

  deleteProduct(id: any){
    return this.http.delete(`${BASE_URL}`, {
      body: { id: id}
    });
  }

  
}  
