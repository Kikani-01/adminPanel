import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { ApiResponse } from '../Model/api.response';
import { User } from '../Model/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) {
   

   }
   baseUrl: string = 'http://localhost:8080/users';
   getUsers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id);
  }

   createUser(user:User): Observable<ApiResponse>{
     return this.http.post<ApiResponse>(this.baseUrl,user);
   }
}
