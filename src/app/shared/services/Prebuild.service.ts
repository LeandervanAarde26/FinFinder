import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DecorModel } from "../Models/Decor.model";
import { PrebuiltsModel } from "../Models/Prebuilts.model";
import { AuthService } from "./auth.service";

@Injectable({providedIn: 'root'})
export class PrebuildsService{
    constructor(private http: HttpClient, private authService: AuthService){}
    baseUrl:string = 'http://localhost:3000/';

    getAllBuilds(): Observable<PrebuiltsModel[]>{
        return this.http.get<PrebuiltsModel[]>(`${this.baseUrl}builds/${this.authService.user || sessionStorage.getItem('user')}`)
    }
}