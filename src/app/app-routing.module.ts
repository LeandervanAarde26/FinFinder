import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardViewComponent } from './Components/dashboard-view/dashboard-view.component';
import { InventoryViewComponent } from './Components/inventory-view/inventory-view.component';
import { SingleItemViewComponent } from './Components/single-item-view/single-item-view.component';
import { DashboardComponent } from './Routes/dashboard/dashboard.component';
import { LandingComponent } from './Routes/landing/landing.component';
import { LoginComponent } from './Routes/login/login.component';
import { RegisterComponent } from './Routes/register/register.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: '', component: DashboardViewComponent },
      { path: 'inventory', component: InventoryViewComponent },
      { path: 'item', component: SingleItemViewComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
