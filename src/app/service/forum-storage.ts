import { ForumResponse } from "../dto/forum-response-info";

export class ForumStorage{

    private forum!: ForumResponse;

    private static forumStorageInstanse: ForumStorage;

    public getForum(): ForumResponse {
        return this.forum;
    }
    public setForum(value: ForumResponse) {
        this.forum = value;
    }

    private constructor(){
        
    }

    public static getInstance(): ForumStorage{
        if (!this.forumStorageInstanse){
            ForumStorage.forumStorageInstanse = new ForumStorage();
        }
        return ForumStorage.forumStorageInstanse;
    }



}