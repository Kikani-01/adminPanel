import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { Login } from './login.model';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  selectedAdmin: Login ; 
  admins:Login[];
  readonly baseURL = "http://localhost:3000/admins";
  constructor(private http:HttpClient) { }
  postUser(admin : Login){
    return this.http.post(this.baseURL ,admin);
}
}
