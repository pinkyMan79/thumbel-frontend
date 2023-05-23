import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// main user api
export class UserService {


  /*
    @PutMapping("/subscribe/{sub-login}")
    @PreAuthorize("hasAnyAuthority('USER') or hasAuthority('ADMIN')")
    void subscribe(@PathVariable("sub-login") String login);
    
    @GetMapping("/restore-password/{email}")
    void sendEmail(@PathVariable("email") String email);
    */

  constructor(private http: HttpClient) { }


    private subscribeUrl = "http://localhost:8080/user/subscribe/";
    private restorePasswordUrl = "http://localhost:8080/user/restore-password/";

    processSubscribe(subscribeTo: string): void{
      this.http.put((this.subscribeUrl+subscribeTo+''), {responseType: 'text'});
    }
    processRestorePassword(email: string): void{
      this.http.get((this.restorePasswordUrl+email+''), {responseType: 'text'});
    }
  }
  
