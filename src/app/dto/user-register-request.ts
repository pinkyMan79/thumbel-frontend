export class UserRegisterRequest{
   // private String login;
   // private String password;
   // private String repeatPassword;
   // private String email;
   // private byte[] photo;
   // private String biography;
   // private Position position;
   login: string;
   password: string;
   repeatPassword: string;
   email: string;
   photo: Int16Array;
   biography: string;
   position: string;

    constructor(login: string, 
        password: string, 
        repeatPassword: string, 
        email: string, 
        photo: Int16Array, 
        biography: string, 
        position: string
        ){
        this.login = login;
        this.password = password;
        this.repeatPassword = repeatPassword;
        this.email = email;
        this.photo = photo;
        this.biography = biography;
        this.position = position;
    }

}