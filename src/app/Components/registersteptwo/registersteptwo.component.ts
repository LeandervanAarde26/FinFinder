import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserRegisterService } from 'src/app/shared/services/register.service';


@Component({
  selector: 'app-registersteptwo',
  templateUrl: './registersteptwo.component.html',
  styleUrls: ['./registersteptwo.component.scss']
})
export class RegistersteptwoComponent implements OnInit {

  constructor(private registerService: UserRegisterService){}
  
  registerForm: FormGroup;

  onSubmit() {
    console.log(this.registerService.regForm.value)
   }

  ngOnInit() {
    this.registerForm = this.registerService.regForm
  }
}
