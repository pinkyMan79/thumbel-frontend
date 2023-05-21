export class UserSiteEntity{

    //private UUID id;
    //private String login;
    //private Instant createdDate;
    //private String password;UUID
    //private byte[] photo;
    //private String biography;
    //private Position position;

    login: string;
    createdDate: Date;
    photo: Int16Array;
    biography: string;
    position: string;

    constructor(login: string, createdDate: Date, photo: Int16Array, biography: string, position: string){
        this.login = login;
        this.createdDate = createdDate;
        this.photo = photo;
        this.biography = biography
        this.position = position;
    }

}