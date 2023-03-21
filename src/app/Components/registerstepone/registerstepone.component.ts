import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserRegisterService } from 'src/app/shared/services/register.service';


@Component({
  selector: 'app-registerstepone',
  templateUrl: './registerstepone.component.html',
  styleUrls: ['./registerstepone.component.scss']
})
export class RegistersteponeComponent implements OnInit {

  constructor(private registerService: UserRegisterService){}
  
  registerForm: FormGroup;


  onSubmit() {
   console.log(this.registerService.regForm.value)
  }

  ngOnInit() {
    this.registerForm = this.registerService.regForm
  }

  
  

}
