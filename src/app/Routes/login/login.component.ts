import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: AuthService){}

  signIn: FormGroup 
  emailFound: boolean;


  ngOnInit() {
    this.signIn = new FormGroup({
      'Email': new FormControl('',[Validators.email, Validators.required]),
    });



  }

  getQuestions(){
    if(this.signIn.valid){
      this.loginService.getQuestions(this.signIn.controls['Email'].value)
    }
  }


}
