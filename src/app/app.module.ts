import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './Routes/landing/landing.component';
import { LoginComponent } from './Routes/login/login.component';
import { HeaderComponent } from './Components/header/header.component';
import { ServicesComponent } from './Components/services/services.component';
import { ButtonComponent } from './Components/button/button.component';
import { ServiceCardComponent } from './Components/service-card/service-card.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { InputComponent } from './Components/input/input.component';
import { RegisterComponent } from './Routes/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './Routes/dashboard/dashboard.component';
import { NavigationBarComponent } from './Components/navigation-bar/navigation-bar.component';
import { DashboardViewComponent } from './Components/dashboard-view/dashboard-view.component';
import { InventoryViewComponent } from './Components/inventory-view/inventory-view.component';
import { InventoryCardComponent } from './Components/inventory-card/inventory-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    HeaderComponent,
    ServicesComponent,
    ButtonComponent,
    ServiceCardComponent,
    FooterComponent,
    InputComponent,
    RegisterComponent,
    DashboardComponent,
    NavigationBarComponent,
    DashboardViewComponent,
    InventoryViewComponent,
    InventoryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
