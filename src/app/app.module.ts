import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import {LoggerService} from './services/LoggerService';
import { FeaturesComponent } from './features/features.component';

const appRoutes: Routes = [
  { path: '', component: FeaturesComponent },
  { path: 'binding', component: DataBindingComponent},
  {path: 'services', component: HeaderComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataBindingComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
