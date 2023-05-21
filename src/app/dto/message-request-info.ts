export class MessageRequest{

    //private String content;
    //private UUID forumId;
    //private String senderLogin;

    content: string;
    forumId: string;
    senderLogin: string;

    constructor(content: string, forumId: string, senderLogin: string){
        this.content = content;
        this.forumId = forumId;
        this.senderLogin = senderLogin;
    }

}