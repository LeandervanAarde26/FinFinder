import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './Routes/landing/landing.component';
import { LoginComponent } from './Routes/login/login.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
