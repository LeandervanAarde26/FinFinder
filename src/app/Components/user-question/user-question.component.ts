import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-user-question',
  templateUrl: './user-question.component.html',
  styleUrls: ['./user-question.component.scss'],
})
export class UserQuestionComponent implements OnInit {
  constructor(private loginService: AuthService) {}

  signIn: FormGroup;
  @Input() label: string;
  @Input() answerCorrect: boolean;

  ngOnInit() {
    this.signIn = this.loginService.signInForm;
  }
}
