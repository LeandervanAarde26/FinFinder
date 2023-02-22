import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './Routes/landing/landing.component';
import { LoginComponent } from './Routes/login/login.component';
import { HeaderComponent } from './Components/header/header.component';
import { ServicesComponent } from './Components/services/services.component';
import { ButtonComponent } from './Components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    HeaderComponent,
    ServicesComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
