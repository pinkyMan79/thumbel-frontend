import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../auth/token-storage.service';
import { UserLoginRequest } from '../dto/login-request-info';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMsg = '';
  authorities: string[] = [];
  private loginRequest: UserLoginRequest = new UserLoginRequest("", "");

  constructor(private authService: AuthService, private storageService: TokenStorageService){}

  ngOnInit(): void {

    if (this.storageService.getToken() == null){
      this.isLoggedIn = true;
      this.authorities = this.storageService.getAuthorities();
    }
  }

  onSubmit(){
    this.loginRequest = new UserLoginRequest(
      this.form.username + "",
      this.form.password + ""
    );
    console.log(this.form.username + " " +
      this.form.password);
    this.authService.login(this.loginRequest).subscribe(
      data => {
        console.log(data.token)
        console.log(data.roleSet)
        console.log(data.username)
        this.storageService.saveToken(data.token);
        this.storageService.saveUsername(data.username);
        this.storageService.saveAuthorities(data.roleSet);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.authorities = this.storageService.getAuthorities();
        window.location.reload();
      }
    )
  }
}
