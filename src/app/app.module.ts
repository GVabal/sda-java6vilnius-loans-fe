import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AdminPageComponent,
    UserPageComponent,
    EmployeePageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
