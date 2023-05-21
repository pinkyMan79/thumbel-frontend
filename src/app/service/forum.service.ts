import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ForumRequest } from '../dto/forum-request-info';
import { ForumResponse } from '../dto/forum-response-info';
import { MessageRequest } from '../dto/message-request-info';


const httpOptions = {
  headers: new HttpHeaders({"Content-Type": "application/json"})
  };

@Injectable({
  providedIn: 'root'
})


/*@PostMapping("/create")
    @PreAuthorize("hasAuthority('ADMIN')")
    void createForum(@RequestBody ForumRequest request);

    @GetMapping("/find/{title}")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    ResponseEntity<List<ForumResponse>> getForum(@PathVariable("title") String title);

    //@MessageMapping("/send")
    @PostMapping("/send")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    ResponseEntity<ForumResponse> sendMessage(@RequestBody MessageRequest request);*/

export class ForumService {

  constructor(private http: HttpClient) {}

  private createForumUrl = "http://localhost:8080/forum/create";
  private getForumUrl = "http://localhost:8080/forum/find/"; // + title here
  private sendMessageUrl = "http://localhost:8080/forum/send";

  processCreateForum(forumRequest: ForumRequest){
    this.http.post(this.createForumUrl, forumRequest, httpOptions);
  }
  processGetForum(title: string): Observable<ForumResponse[]>{
    return this.http.get<ForumResponse[]>((this.getForumUrl+title));
  }
  proccessSendMessage(message: MessageRequest): Observable<ForumResponse>{
      return this.http.post<ForumResponse>(this.sendMessageUrl, message, httpOptions);
  }

}
