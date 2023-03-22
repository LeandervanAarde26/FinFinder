import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserMaterialModel } from "../Models/userMaterials.model";

@Injectable({providedIn: 'root'})
export class UserMaterialService{

    constructor(private http: HttpClient){}
    public userMaterials: UserMaterialModel[] = [];
    baseUrl:string = 'http://localhost:3000/';
    user: string = sessionStorage.getItem('user');

    getAllUserMaterials(){
        return this.http.get<UserMaterialModel[]>(`${this.baseUrl}user/materials/${this.user}`)
    }
}