import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  rest_url_login="http://mfood.online/api/users/login";
  
  constructor(private http:HttpClient) { }
  checkLoginCustomer(obj){
    return this.http.post(this.rest_url_login,obj)
  }
}
