import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserModel } from 'src/app/shared/Models/User.model';
import { UserRegisterService } from 'src/app/shared/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  next: boolean = false;


  formattedUser: UserModel;

  constructor(private registerService: UserRegisterService) { }

  ngOnInit() {
    this.registerForm = this.registerService.regForm
  }


  onSubmit() {
    this.formattedUser = new UserModel(
      "null", 
      this.registerForm.controls["Username"].value,
       this.registerForm.controls["Email"].value,
        [
          { question: this.registerForm.controls["QuestionOne"].value, 
          answer: this.registerForm.controls["AnswerOne"].value },

          { question: this.registerForm.controls["QuestionTwo"].value, 
          answer: this.registerForm.controls["AnswerTwo"].value },

          { question: this.registerForm.controls["QuestionThree"].value, 
          answer: this.registerForm.controls["AnswerThree"].value }
        ])

        console.log(this.formattedUser)
  
    this.registerService.registerNewUser(this.formattedUser)
  }

  goNext() {
    this.next = !this.next
    console.log('next')
  }
}
