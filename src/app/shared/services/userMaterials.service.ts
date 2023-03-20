import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserMaterialModel } from "../Models/userMaterials.model";

@Injectable({providedIn: 'root'})
export class UserMaterialService{

    constructor(private http: HttpClient){}
    public userMaterials: UserMaterialModel[] = [];
    baseUrl:string = 'http://localhost:3000/';
    getAllUserMaterials(){
        return this.http.get<UserMaterialModel[]>(`${this.baseUrl}user/materials/641844d8277d7c7c04bc73f6`)
    }
}