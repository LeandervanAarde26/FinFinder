import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { CreateFishtankViewComponent } from './Components/create-fishtank-view/create-fishtank-view.component';
import { DashboardViewComponent } from './Components/dashboard-view/dashboard-view.component';
import { FishTanksComponent } from './Components/fish-tanks/fish-tanks.component';
import { InventoryViewComponent } from './Components/inventory-view/inventory-view.component';
import { SingleDecorViewComponent } from './Components/single-decor-view/single-decor-view.component';
import { SingleItemViewComponent } from './Components/single-item-view/single-item-view.component';
import { SingleTankViewComponent } from './Components/single-tank-view/single-tank-view.component';
import { DashboardComponent } from './Routes/dashboard/dashboard.component';
import { LandingComponent } from './Routes/landing/landing.component';
import { LoginComponent } from './Routes/login/login.component';
import { RegisterComponent } from './Routes/register/register.component';
import { PreBuildsViewComponent } from './Components/pre-builds-view/pre-builds-view.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: DashboardViewComponent,
        data: { animation: 'One' },
      },
      {
        path: 'inventory',
        component: InventoryViewComponent,
        data: { animation: 'Two' },
      },
      {
        path: 'item/:category/:id',
        component: SingleItemViewComponent,
        data: { animation: 'Three' },
      },
      {
        path: 'innerTank/:category/:id',
        component: SingleDecorViewComponent,
        data: { animation: 'Three' },
      },
      {
        path: 'tanks',
        component: FishTanksComponent,
        data: { animation: 'Four' },
      },
      {
        path: 'tank/:id',
        component: SingleTankViewComponent,
        data: { animation: 'Five' },
      },
      {
        path: 'create',
        component: CreateFishtankViewComponent,
        data: { animation: 'Six' },
      },
      {
        path: 'builds',
        component: PreBuildsViewComponent,
        data: { animation: 'Six' },
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
