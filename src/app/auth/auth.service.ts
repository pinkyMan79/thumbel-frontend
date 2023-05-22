import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from '../dto/jwt-response-info';
import { UserRegisterRequest } from '../dto/user-register-request';
import { UserLoginRequest } from '../dto/login-request-info';
import { UserSiteEntity } from '../dto/user-reponse-info';

// тут храним хедер, работаем по rest так что передайм JSON
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
// here some lofig for user api
export class AuthService {

  private loginUrl = 'http://localhost:8080/user/login';
  private registerUrl = 'http://localhost:8080/user/register';

  // регистрируем чувака
  register(registerForm: UserRegisterRequest): Observable<UserSiteEntity> {
    console.log(registerForm);
    return this.http.post<UserSiteEntity>(this.registerUrl, registerForm, httpOptions);
  }

  // логиним чувака и ожидаем JwtResponse, позднее мы возьмём от туда токен и пихнеём его в локальный кэш браузера
  login(loginForm: UserLoginRequest): Observable<JwtResponse> {
    console.log(loginForm)
    return this.http.post<JwtResponse>(this.loginUrl, loginForm, httpOptions);
  }

  constructor(private http: HttpClient){}

}
