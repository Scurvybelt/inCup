import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmentLocal } from 'src/environments/environment';


const BASE_URL = environmentLocal.api;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  findUser(usuario:string,password: string){
    return this.http.post(`${BASE_URL}/login`,{ usuario, password});
  }
}
