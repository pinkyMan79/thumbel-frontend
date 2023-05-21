export class JwtResponse{
    //private String token;
    //private String type = "Bearer";
    //pay-load
    //private UUID id;
    //private String username;
    //private Set<String> roleSet;

    token: string;
    type = 'Bearer';
    id: string;
    username: string
    roleSet: Set<String>

    constructor(token: string, id: string, username: string, roleSet: Set<String>){
        this.token = token;
        this.username = username;
        this.id = id;
        this.roleSet = roleSet;
    }

}