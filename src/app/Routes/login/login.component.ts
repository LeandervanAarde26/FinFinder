import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Observable, Subscription } from 'rxjs';
import { UserQuestionInterface } from 'src/app/shared/Interfaces/UserQuestions.interface';
import { UserMaterialModel } from 'src/app/shared/Models/userMaterials.model';
import { UserMaterialService } from 'src/app/shared/services/userMaterials.service';
import { UserModel } from 'src/app/shared/Models/User.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private loginService: AuthService, private materialsService: UserMaterialService) { }

  signIn: FormGroup
  emailFound: boolean;
  question: UserQuestionInterface;
  answer: UserQuestionInterface;
  error: boolean;
  status: boolean = false;
  value: boolean = false
  userId: string;
  correct: boolean;

  userSpecifics: Observable<UserModel>;

  ngOnInit() {
    this.signIn = this.loginService.signInForm
    this.correct = true;
  }

  async getQuestions() {
    if (this.signIn.controls['Email'].valid) {
      this.userSpecifics = await this.loginService.getQuestions(this.signIn.controls['Email'].value)
        if(this.userSpecifics){
          this.status = this.userSpecifics['status']
          this.question = this.userSpecifics['question'].question
          this.answer = this.userSpecifics['question'].answer

          console.log(this.userSpecifics)
          console.log(this.loginService.user)
        }

    }
  };

  checkAnswers() {
    this.loginService.answerQuestion(this.answer);
    this.correct = this.loginService.correct;
  };

  ngOnDestroy() {
    this.signIn.reset()
  }
}