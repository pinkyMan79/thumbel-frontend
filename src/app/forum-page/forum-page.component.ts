import { Component, OnInit } from '@angular/core';

import { ForumStorage } from '../service/forum-storage';
import { ForumResponse } from '../dto/forum-response-info';
import { MessageResponse } from '../dto/message-response-info';
import { ForumService } from '../service/forum.service';
import { MessageRequest } from '../dto/message-request-info';
import { TokenStorageService } from '../auth/token-storage.service';
import { ForumPipeline } from './forum-ping-pong';

@Component({
  selector: 'app-forum-page',
  templateUrl: './forum-page.component.html',
  styleUrls: ['./forum-page.component.css']
})
export class ForumPageComponent implements OnInit {

  constructor(private pipline: ForumPipeline, private forumService: ForumService, private storage: TokenStorageService){}

  private forumStorage = ForumStorage.getInstance();

  forum: ForumResponse | undefined;

  public messages: Set<MessageResponse> | undefined;

  messageReq: MessageRequest | undefined;

  username: string = this.storage.getUsername();

  isLoggedIn = true;

  isForumSelected = true;

  meassage: string | undefined;

  ngOnInit(): void {
      console.log('initial')
      this.pipline.forum$.complete
      this.pipline.forum$.subscribe(
        ent => {
          console.log('hi')
          this.forum = ent
          console.log(ent.id)
          console.log(ent.description)
        }
      )
      this.pipline.forum$.forEach(
        ent => {
          console.log('working')
          this.forum = ent;
        }
      );
      if (!this.forum){
        this.forum = this.forumStorage.getForum();
        console.log(this.forum);

      }
      console.log(sessionStorage.getItem("FORUM"));
      if (sessionStorage.getItem("FORUM")){
        this.forum = JSON.parse(sessionStorage.getItem("FORUM")+"");
        this.messages = this.forum?.messages;
        console.log("yeah")
      }
  }

  sendMessage(){
    if (this.meassage && this.forum){
    this.messages = this.forum.messages;
    this.messageReq = new MessageRequest(this.meassage, this.forum.id, this.storage.getUsername());
    this.forumService.proccessSendMessage(this.messageReq).subscribe(data => {
      this.forum = data
      this.pipline.forumSet(data);
      });
    }
  }
}
