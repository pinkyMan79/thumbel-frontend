import { Component, OnInit } from '@angular/core';
import { ForumService } from '../service/forum.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { ForumRequest } from '../dto/forum-request-info';

@Component({
  selector: 'app-forum-creation-page',
  templateUrl: './forum-creation-page.component.html',
  styleUrls: ['./forum-creation-page.component.css']
})
export class ForumCreationPageComponent implements OnInit{
  
  constructor(private forumService: ForumService, private storage: TokenStorageService){ }

  froumRequest: ForumRequest | undefined;

  form: any = {};

  ngOnInit(): void {
    
  }

  createForum(){
    this.froumRequest = new ForumRequest(this.form.title, this.form.description);
    if (!this.storage.getAuthorities().filter(v => v == 'ADMIN')){
      console.log('not admin');
    }
    this.forumService.processCreateForum(this.froumRequest);
  }

}
