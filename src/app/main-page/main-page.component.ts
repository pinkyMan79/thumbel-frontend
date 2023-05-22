import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{

  // can be produced to a class in the next version
  info: any;
  
  constructor(private tokenService: TokenStorageService){}

  ngOnInit(): void {
    this.info = {
      token: this.tokenService.getToken(),
      username: this.tokenService.getUsername(),
      authorities: this.tokenService.getAuthorities()
    };
  }

  logout(): void{
    this.tokenService.signOut();
    window.location.reload;
  }

}
