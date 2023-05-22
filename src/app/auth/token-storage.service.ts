import { Injectable } from '@angular/core';

const TOKEN_KEY = "TOKEN";
const USERNAME_KEY = "USERNAME";
const AUTHORITIES_KEY = "AUTHORITIES";

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  private roles: Array<string> = [];

  constructor() { }

  signOut(){
    window.sessionStorage.clear;
  }

  public saveToken(token: string){
    let storage = window.sessionStorage;
    if (storage.getItem(TOKEN_KEY)){
      storage.removeItem(TOKEN_KEY);
    }
    storage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string{
    let token = sessionStorage.getItem(TOKEN_KEY);
    console.log(token);
    if(token){
      return token;
    }else{
      return "";
    }
  }

  public saveUsername(username: string){
    let storage = window.sessionStorage;
    if(storage.getItem(USERNAME_KEY)){
      storage.removeItem(USERNAME_KEY);
    }
    storage.setItem(USERNAME_KEY, username);
  }

  public getUsername(): string{
    let token = sessionStorage.getItem(USERNAME_KEY);
    if (token){
      return token;
    }else{
      return "";
    }
  }

  public saveAuthorities(authorities: string[]){
    let storage = window.sessionStorage;
    if (storage.getItem(AUTHORITIES_KEY)){
      storage.removeItem(AUTHORITIES_KEY);
    }
    console.log(authorities.toString);
    storage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[]{
    this.roles = [];
    if (sessionStorage.getItem(AUTHORITIES_KEY)){
      console.log(sessionStorage.getItem(AUTHORITIES_KEY));
      let au = sessionStorage.getItem(AUTHORITIES_KEY);
      if (au){
        JSON.parse(au).forEach((authtority: string) => {
          this.roles.push(authtority);
        });
      }else{
        console.log("Some problems in get auth")
      }
      
    }
    return this.roles;
  }

}
