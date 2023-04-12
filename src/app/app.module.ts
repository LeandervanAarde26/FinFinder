import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './Routes/landing/landing.component';
import { LoginComponent } from './Routes/login/login.component';
import { HeaderComponent } from './Components/header/header.component';
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
import { SearchInputComponent } from './Components/search-input/search-input.component';
import { SingleItemViewComponent } from './Components/single-item-view/single-item-view.component';
import { SimiliarLocationsCardComponent } from './Components/similiar-locations-card/similiar-locations-card.component';
import { FishTanksComponent } from './Components/fish-tanks/fish-tanks.component';
import { MyFishTankCardComponent } from './Components/my-fish-tank-card/my-fish-tank-card.component';
import { SingleTankViewComponent } from './Components/single-tank-view/single-tank-view.component';
import { UpdateCardComponent } from './Components/update-card/update-card.component';
import { CreateFishtankViewComponent } from './Components/create-fishtank-view/create-fishtank-view.component';
import { RegistersteponeComponent } from './Components/registerstepone/registerstepone.component';
import { RegistersteptwoComponent } from './Components/registersteptwo/registersteptwo.component';
import { RegistersteptwoanswersComponent } from './Components/registersteptwoanswers/registersteptwoanswers.component';
import { RegModalComponent } from './Components/reg-modal/reg-modal.component';
import { UserQuestionComponent } from './Components/user-question/user-question.component';
import { CompatibleFishCardComponent } from './Components/compatible-fish-card/compatible-fish-card.component';
import { SingleDecorViewComponent } from './Components/single-decor-view/single-decor-view.component';
import { PreBuildsViewComponent } from './Components/pre-builds-view/pre-builds-view.component';
import { PrebuildCardsComponent } from './Components/prebuild-cards/prebuild-cards.component';
import { FoundInBuidsCardComponent } from './Components/found-in-buids-card/found-in-buids-card.component';
import { BuildviewComponent } from './Components/buildview/buildview.component';
import { AddFishComponent } from './Components/add-fish/add-fish.component';
import { NotificationModalComponent } from './Components/notification-modal/notification-modal.component';
import { AddressModalComponent } from './Components/address-modal/address-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    HeaderComponent,
    ButtonComponent,
    ServiceCardComponent,
    FooterComponent,
    InputComponent,
    RegisterComponent,
    DashboardComponent,
    NavigationBarComponent,
    DashboardViewComponent,
    InventoryViewComponent,
    InventoryCardComponent,
    SearchInputComponent,
    SingleItemViewComponent,
    SimiliarLocationsCardComponent,
    FishTanksComponent,
    MyFishTankCardComponent,
    SingleTankViewComponent,
    UpdateCardComponent,
    CreateFishtankViewComponent,
    RegistersteponeComponent,
    RegistersteptwoComponent,
    RegistersteptwoanswersComponent,
    RegModalComponent,
    UserQuestionComponent,
    CompatibleFishCardComponent,
    SingleDecorViewComponent,
    PreBuildsViewComponent,
    PrebuildCardsComponent,
    FoundInBuidsCardComponent,
    BuildviewComponent,
    AddFishComponent,
    NotificationModalComponent,
    AddressModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
