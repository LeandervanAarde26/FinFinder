import { UserFishInterFace } from "../Interfaces/UserFish.interface";

export class UserModel {
    public id: string;
    public username: string;
    public Email: string; 
    public fish: UserFishInterFace[];
    public locations: string []; 

    constructor(id: string, username: string, Email: string, fish: UserFishInterFace[], locations: string[] ){
        this.id = id;
        this.username = username;
        this.Email = Email;
        this.fish = fish;
        this.locations = locations;
    }
}