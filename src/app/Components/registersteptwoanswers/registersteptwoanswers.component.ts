import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-registersteptwoanswers',
  templateUrl: './registersteptwoanswers.component.html',
  styleUrls: ['./registersteptwoanswers.component.scss']
})
export class RegistersteptwoanswersComponent implements OnInit {

  constructor(private registerService: AuthService){}
  
  registerForm: FormGroup;

  onSubmit() {
    console.log(this.registerService.regForm.value)
   }

  ngOnInit() {
    this.registerForm = this.registerService.regForm
  }
}
