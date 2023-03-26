import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/shared/Models/User.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  next: boolean = false;
  formattedUser: UserModel;
  regComplete: boolean;
  validated: boolean;
  subscribe: Subscription;


  constructor(private registerService: AuthService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.registerService.regForm
    this.regComplete = this.registerService.regComplete
    this.subscribe = this.registerService.boolChange.subscribe((sub) => {
      this.regComplete = sub;
    })
  }

  onSubmit() {
    this.formattedUser = new UserModel(
      "null",
      this.registerForm.controls["Username"].value.trim(),
      this.registerForm.controls["Email"].value.trim(),
      [
        {
          question: this.registerForm.controls["QuestionOne"].value.trim(),
          answer: this.registerForm.controls["AnswerOne"].value.trim()
        },

        {
          question: this.registerForm.controls["QuestionTwo"].value.trim(),
          answer: this.registerForm.controls["AnswerTwo"].value.trim()
        },

        {
          question: this.registerForm.controls["QuestionThree"].value.trim(),
          answer: this.registerForm.controls["AnswerThree"].value.trim()
        }
      ])


    if (!this.registerForm.valid) {
      this.validated = false
    } else {
      this.validated = true;
      this.registerService.registerNewUser(this.formattedUser)
    }

    if (this.registerService.regComplete) {
      this.regComplete = true;
    }
  }

  goNext() {
    this.registerForm.controls['Username'].value === ''
      || this.registerForm.controls['Email'].value === ''
      ?
      null
      :
      this.next = !this.next
    console.log('next')
  }

  ngOnDestroy(){
    this.subscribe.unsubscribe();
    this.registerForm.reset()
  }
}


