import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg-modal',
  templateUrl: './reg-modal.component.html',
  styleUrls: ['./reg-modal.component.scss']
})
export class RegModalComponent {

  constructor(private router: Router){}

  goBack(){
    this.router.navigate(['/'])
  }

  goToLogin(){
    this.router.navigate(['/login'])
  }

}
