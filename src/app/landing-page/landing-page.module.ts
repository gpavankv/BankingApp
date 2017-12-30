import { NgModule } from '@angular/core';
import { LandingPageComponent } from './landing-page.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/UserService';
import { AuthService } from '../../services/auth.service';

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [ CommonModule ],
  providers: [],
  exports: [ LandingPageComponent ]
})

export class LandingPageModule {}
