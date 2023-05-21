import { Injectable } from '@angular/core';

const TOKEN_KEY = "";
const USERNAME_KEY = "";
const AUTHORITIES_KEY = "";

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  private roles: Array<string> = [];

  constructor() { }

  public signOut(){
    window.sessionStorage.clear;
  }

  public saveToken(token: string){
    let storage = window.sessionStorage;
    if (storage.getItem(TOKEN_KEY) != null){
      storage.removeItem(TOKEN_KEY);
    }
    storage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null{
    let token = sessionStorage.getItem(TOKEN_KEY);
    return token;
  }

  public saveUsername(username: string){
    let storage = window.sessionStorage;
    if(storage.getItem(USERNAME_KEY) != null){
      storage.removeItem(USERNAME_KEY);
    }
    storage.setItem(USERNAME_KEY, username);
  }

  public getUsername(): string | null{
    let token = sessionStorage.getItem(USERNAME_KEY);
    return token;
  }

  public saveAuthorities(authorities: string[]){
    let storage = window.sessionStorage;
    if (storage.getItem(AUTHORITIES_KEY) != null){
      storage.removeItem(AUTHORITIES_KEY);
    }
    console.log(authorities.toString);
    storage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[]{
    this.roles = [];
    if (sessionStorage.getItem(AUTHORITIES_KEY) != null){
      console.log(sessionStorage.getItem(AUTHORITIES_KEY));
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)+"").forEach((authtority: string) => {
        this.roles.push(authtority);
      });
    }
    return this.roles;
  }

}
