import { Injectable, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { UserModel } from "../Models/User.model";
import { Router } from "@angular/router";
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient, private Router: Router) { }
  baseUrl: string = 'http://localhost:3000/'
  regComplete: boolean = false;
  boolChange = new EventEmitter<boolean>();
  user: string;
  // question =  new EventEmitter<{}>();
  public question: string;

  regForm = new FormGroup({
    'Username': new FormControl('', Validators.required),
    'Email': new FormControl('', [Validators.email, Validators.required]),
    'QuestionOne': new FormControl('', Validators.required),
    'QuestionTwo': new FormControl('', Validators.required),
    'QuestionThree': new FormControl('', Validators.required),
    'AnswerOne': new FormControl('', Validators.required),
    'AnswerTwo': new FormControl('', Validators.required),
    'AnswerThree': new FormControl('', Validators.required)
  });

  signInForm = new FormGroup({
    'Email': new FormControl('', [Validators.email, Validators.required]),
    'Answer': new FormControl('', Validators.required)
  });

  registerNewUser(body: any): Observable<UserModel> | void {
    this.http.post<UserModel>(`${this.baseUrl}user`, body).subscribe((response: any) => {
      console.log(response.status)
      return response.status ? this.boolChange.emit(true) : null;
    })
  }

  getQuestions(email: string): Observable<UserModel> | any {
    return this.http.get<UserModel>(`${this.baseUrl}user/${email}`)
  };

  answerQuestion(value) {
    if (this.signInForm.controls['Answer'].value === value) {
      this.Router.navigate(['/dashboard'])
      console.log('right')
      return true
    } else {
      return false
    }

  }
}