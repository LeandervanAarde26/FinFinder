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
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
