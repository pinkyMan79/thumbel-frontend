import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { UserSiteEntity } from '../dto/user-reponse-info';
import { UserRegisterRequest } from '../dto/user-register-request';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  ngOnInit(): void {

    if(window.sessionStorage.getItem('USER_JSON') 
          && window.sessionStorage.getItem('USER_JSON') != null){
      this.user =  JSON.parse(window.sessionStorage.getItem('USER_JSON')+'');
    }
  }

  user: UserSiteEntity | undefined

}
