import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { AdminPageComponent } from './containers/admin-page/admin-page.component';
import { UserPageComponent } from './containers/user-page/user-page.component';
import { EmployeePageComponent } from './containers/employee-page/employee-page.component';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { LoginFormComponent } from './containers/login-page/components/login-form/login-form.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AdminPageComponent,
    UserPageComponent,
    EmployeePageComponent,
    HomePageComponent,
    LoginFormComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
