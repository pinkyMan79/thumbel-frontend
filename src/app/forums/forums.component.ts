import { Component, OnInit } from '@angular/core';

import { ForumService } from '../service/forum.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { ForumResponse } from '../dto/forum-response-info';
import { ForumStorage } from '../service/forum-storage';

import { ForumPipeline } from '../forum-page/forum-ping-pong';

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.css']
})
export class ForumsComponent implements OnInit{

  constructor(private pipline: ForumPipeline ,private forumService: ForumService, private storage: TokenStorageService){}

  isLoggedIn = true;
  isForumSelected = true;
  forumName: string = '';
  forums: ForumResponse[] | undefined;
  public selectedForum: ForumResponse | undefined;
  forumStorage: ForumStorage = ForumStorage.getInstance();
  username: string = this.storage.getUsername();

  ngOnInit(): void {
    if (this.storage.getToken() == null){
      this.isLoggedIn = true;
    }
  }

  findForums(): void{
    if(this.forumName && this.forumName != ''){
      this.forumService.processGetForum(this.forumName).subscribe(
        data => {
          this.forums = data;
        }
      );
    }
  }

  chooseForum(index: number){
    if(this.forums != undefined){
      console.log('find forums!!!!')
      this.isForumSelected = true
      this.selectedForum = this.forums[index];
      this.forumStorage.setForum(this.selectedForum);

      this.pipline.forum$.subscribe(
        ent =>{
          console.log('from forums to forum')
          console.log(ent.id)
          console.log(ent.description)
        }
      )

      this.pipline.forumSet(this.selectedForum);
      console.log(this.selectedForum.title);
      sessionStorage.removeItem("FORUM");
      sessionStorage.setItem("FORUM", JSON.stringify(this.selectedForum))

      //window.sessionStorage.setItem("FORUM", this.selectedForum);
    }else{
      this.isForumSelected = false;
    }
  }

  goToForum(){
    console.log('go to forum')
    if (this.selectedForum){
      console.log("opa")
      this.pipline.forum$.next(this.selectedForum);
    }
    window.location.replace('http://localhost:4200/forum');
  }

}
