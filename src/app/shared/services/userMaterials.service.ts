import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserMaterialModel } from "../Models/userMaterials.model";
import { AuthService } from "./auth.service";

@Injectable({providedIn: 'root'})
export class UserMaterialService{

    constructor(private http: HttpClient, private authService: AuthService){}
    public userMaterials: UserMaterialModel[] = [];
    baseUrl:string = 'http://localhost:3000/';
    user: string = this.authService.user
    quantityUpdated: boolean = false;

    getAllUserMaterials(){
        return this.http.get<UserMaterialModel[]>(`${this.baseUrl}user/materials/${this.authService.user || sessionStorage.getItem('user')}`)
    }

    updateUserMaterial(body: {}){
       this.http.patch<any>(`${this.baseUrl}user/fish/${this.authService.user || sessionStorage.getItem('user')}`, body).subscribe((response: any) => {
        
        if(!response.acknowledged){
            return this.quantityUpdated = false
        }
        return this.getAllUserMaterials()
       
      });
    }

    getSingleMaterial(itemId: string, category: string){
        return this.http.get<UserMaterialModel>(`${this.baseUrl}user/material/${this.authService.user || sessionStorage.getItem('user')}?itemId=${itemId}&category=${category}`)
    }
}