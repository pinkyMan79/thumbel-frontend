export class MessageResponse{

    //private UUID id;
    //private Instant date;
    //private String content;
    //private UUID forumId;
    //private String senderLogin;

    id: string;
    date: Date;
    content: string;
    forumId: string;
    senderLogin: String;

    constructor(id: string, date: Date, content: string, forumId: string, senderLogin: string){
        this.id = id;
        this.date = date;
        this.content = content;
        this.forumId = forumId;
        this.senderLogin = senderLogin;
    }

}