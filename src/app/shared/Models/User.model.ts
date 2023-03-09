export class UserModel {
    public id: string;
    public username: string;
    public Email: string; 
    public fish: [{
        id: string, 
        quantity: number, 
    }];
    public locations: string []; 

    constructor(id: string, username: string, Email: string, fish: [{id: string, quantity: number}], locations: string[] ){
        this.id = id;
        this.username = username;
        this.Email = Email;
        this.fish = fish;
        this.locations = locations;
    }
}