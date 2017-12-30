import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [ AuthService ],
  exports: [ LoginComponent ]
})

export class LoginModule {}
