import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Subscription } from 'rxjs';
import { UserQuestionInterface } from 'src/app/shared/Interfaces/UserQuestions.interface';
import { UserMaterialModel } from 'src/app/shared/Models/userMaterials.model';
import { UserMaterialService } from 'src/app/shared/services/userMaterials.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: AuthService, private materialsService : UserMaterialService){}

  signIn: FormGroup 
  emailFound: boolean;
  question: UserQuestionInterface;
  answer: UserQuestionInterface;
  error: boolean;
  status: boolean = false;
  value : boolean = false
  userId : any;

  ngOnInit() {
    this.signIn = this.loginService.signInForm
  }

  getQuestions(){
    if(this.signIn.controls['Email'].valid){
       this.loginService.getQuestions(this.signIn.controls['Email'].value).subscribe((data) =>{   
        this.userId = sessionStorage.setItem('user', data.user)
        console.log(data.user)
        return data.status ? [this.question = data.question.question, this.answer = data.question.answer ,this.status = true] : this.error = true;
       });     
    }
  };

  checkAnswers(){
    this.loginService.answerQuestion(this.answer)
  };

}