import { MessageResponse } from "./message-response-info";

export class ForumResponse{

    //private UUID id;
    //private String title;
    //private String description;
    //private Set<MessageResponse> messages;

    id: string;
    title: string;
    description: string;
    messages: Set<MessageResponse>

    constructor(id: string, title: string, description: string, messages: Set<MessageResponse>){
        this.id = id;
        this.title = title;
        this.description = description;
        this.messages = messages;
    }

}