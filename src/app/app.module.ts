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
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import { AppliedLoansListComponent } from './containers/user-page/components/applied-loans-list/applied-loans-list.component';
import {ErrorInterceptor} from './interceptors/ErrorInterceptor';
import {JwtInterceptor} from './interceptors/JwtInterceptor';
import { PendingLoansListComponent } from './containers/employee-page/components/pending-loans-list/pending-loans-list.component';
import { PendingLoanComponent } from './containers/employee-page/components/pending-loan/pending-loan.component';
import { ActiveLoansListComponent } from './containers/user-page/components/active-loans-list/active-loans-list.component';
import {LoanApplicationFormComponent} from './containers/user-page/components/loan-application-form/loan-application-form.component';
import { EmployeeListComponent } from './containers/admin-page/components/employee-list/employee-list.component';
import { AddEmployeeFormComponent } from './containers/admin-page/components/add-employee-form/add-employee-form.component';
import { RegisterFormComponent } from './containers/login-page/components/register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AdminPageComponent,
    UserPageComponent,
    EmployeePageComponent,
    HomePageComponent,
    LoginFormComponent,
    NotFoundPageComponent,
    AppliedLoansListComponent,
    PendingLoansListComponent,
    PendingLoanComponent,
    ActiveLoansListComponent,
    LoanApplicationFormComponent,
    EmployeeListComponent,
    AddEmployeeFormComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
