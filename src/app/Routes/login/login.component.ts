import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signIn: FormGroup 

  ngOnInit() {
    this.signIn = new FormGroup({
      'Email': new FormControl('',[Validators.email, Validators.required]),
    })
  }

  getQuestions(){
    console.log(this.signIn.value)
  }
}
