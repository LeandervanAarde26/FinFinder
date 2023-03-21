import { Injectable } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { UserModel } from "../Models/User.model";

@Injectable({providedIn: 'root'})
export class UserRegisterService {

    constructor(private http: HttpClient){}
    baseUrl:string = 'http://localhost:3000/'
    
    regForm = new FormGroup({
        'Username': new FormControl('', Validators.required),
        'Email': new FormControl('',[Validators.email, Validators.required]),
        'QuestionOne': new FormControl('',Validators.required),
        'QuestionTwo': new FormControl('',Validators.required),
        'QuestionThree': new FormControl('',Validators.required),
        'AnswerOne': new FormControl('',Validators.required),
        'AnswerTwo': new FormControl('',Validators.required),
        'AnswerThree': new FormControl('',Validators.required)
      });

      registerNewUser(body:any): Observable<UserModel> | void{
        this.http.post<UserModel>(`${this.baseUrl}user`, body).subscribe((response: any) =>{
           return response;
        })
    }
}