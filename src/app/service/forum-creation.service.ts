import { Injectable, OnInit } from '@angular/core';
import { ForumService } from './forum.service';

@Injectable({
  providedIn: 'root'
})
export class ForumCreationService{

  constructor(private forumService: ForumService) { }
  

}
