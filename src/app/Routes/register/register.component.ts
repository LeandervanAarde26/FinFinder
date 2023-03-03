import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  ngOnInit() {
    this.registerForm = new FormGroup({
      'Username': new FormControl('', Validators.required),
      'Email': new FormControl('',[Validators.email, Validators.required]),
      'QuestionOne': new FormControl('',Validators.required),
      'QuestionTwo': new FormControl('',Validators.required),
      'QuestionThree': new FormControl('',Validators.required),
      'AnswerOne': new FormControl('',Validators.required),
      'AnswerTwo': new FormControl('',Validators.required),
      'AnswerThree': new FormControl('',Validators.required)
    });

  }


  onSubmit() {
    console.log(this.registerForm.value)
  }
}
