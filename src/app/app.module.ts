import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AuthService } from '../services/auth.service';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginModule } from './login/login.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { UserService } from '../services/UserService';
import { SharedService } from '../services/SharedService';

const appRoutes: Routes = [
  { path: '', component: CarouselComponent },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: LandingPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LoginModule,
    LandingPageModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    UserService,
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
