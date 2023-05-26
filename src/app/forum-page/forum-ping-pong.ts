import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ForumResponse } from '../dto/forum-response-info';

@Injectable({
  providedIn: 'root',
})
export class ForumPipeline {
    public forum$ = new Subject<ForumResponse>();

		public forumSet(forum: ForumResponse) {
   		this.forum$.next(forum); 
  	}
}