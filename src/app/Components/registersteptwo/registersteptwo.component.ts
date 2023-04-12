import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-registersteptwo',
  templateUrl: './registersteptwo.component.html',
  styleUrls: ['./registersteptwo.component.scss'],
})
export class RegistersteptwoComponent implements OnInit {
  constructor(private registerService: AuthService) {}

  registerForm: FormGroup;

  onSubmit() {
    console.log(this.registerService.regForm.value);
  }

  ngOnInit() {
    this.registerForm = this.registerService.regForm;
  }
}
