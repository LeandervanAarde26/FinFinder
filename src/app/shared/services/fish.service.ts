import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FishModel } from "../Models/Fish.model";

@Injectable({providedIn: 'root'})
export class FishService{

    constructor(private http: HttpClient){}
    public fish: FishModel[] =[]
    baseUrl:string = 'http://localhost:3000/'

    getAllFish(): Observable<FishModel[]> {
       return this.http.get<FishModel[]>(`${this.baseUrl}fish`)
    }

    getIndividual(id):Observable<FishModel[]> {
        return this.http.get<FishModel[]>(`${this.baseUrl}fish/${id}`)
    }
}