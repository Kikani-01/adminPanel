import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { ResetPassword } from './resetpassword.model';
@Injectable({
  providedIn: 'root'
})
export class ResetpasswordService {
resets : ResetPassword[];
readonly baseURL = "http://localhost:3000/reset";
  constructor(private http: HttpClient) { 

  } 
     postUser(resets : ResetPassword){
    return this.http.post(this.baseURL ,resets);
}

}
