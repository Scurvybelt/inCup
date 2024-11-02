import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmentLocal } from 'src/environments/environment';


const BASE_URL = environmentLocal.api;

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { 

  }

  sendEmail(data: any){
    return this.http.post(`${BASE_URL}/email`,data);
  }
}
