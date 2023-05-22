import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './auth/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  authorities: string[] | undefined;
  authority: string | undefined;

  constructor (private storageService: TokenStorageService){}

  ngOnInit(): void {
    if (this.storageService.getToken()) {
      this.authorities = this.storageService.getAuthorities();
      this.authorities.every(role => {
        if (role === 'ADMIN') {
          this.authority = 'ADMIN';
          return false;
        } else if (role === 'GUEST') {
          this.authority = 'GUEST';
          return false;
        }
        this.authority = 'USER';
        return true;
      });
    }
  }
  title = 'semester-front-application';
}
