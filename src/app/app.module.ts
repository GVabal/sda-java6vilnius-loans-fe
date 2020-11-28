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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppliedLoansListComponent } from './containers/user-page/components/applied-loans-list/applied-loans-list.component';
import {ErrorInterceptor} from './interceptors/ErrorInterceptor';
import {JwtInterceptor} from './interceptors/JwtInterceptor';
import { PendingLoansListComponent } from './containers/employee-page/components/pending-loans-list/pending-loans-list.component';
import { PendingLoanComponent } from './containers/employee-page/components/pending-loan/pending-loan.component';
import { ActiveLoansListComponent } from './containers/user-page/components/active-loans-list/active-loans-list.component';
import {LoanApplicationFormComponent} from './containers/user-page/components/loan-application-form/loan-application-form.component';
import { EmployeeListComponent } from './containers/admin-page/components/employee-list/employee-list.component';
import { AddEmployeeFormComponent } from './containers/admin-page/components/add-employee-form/add-employee-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './shared/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RegisterPageComponent } from './containers/register-page/register-page.component';
import {RegisterFormComponent} from './containers/register-page/components/register-form/register-form.component';
import { RepayLoanDialogComponent } from './containers/user-page/components/repay-loan-dialog/repay-loan-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AdminPageComponent,
    UserPageComponent,
    EmployeePageComponent,
    HomePageComponent,
    LoginFormComponent,
    AppliedLoansListComponent,
    PendingLoansListComponent,
    PendingLoanComponent,
    ActiveLoansListComponent,
    LoanApplicationFormComponent,
    EmployeeListComponent,
    AddEmployeeFormComponent,
    RegisterFormComponent,
    ToolbarComponent,
    NavigationComponent,
    RegisterPageComponent,
    RegisterFormComponent,
    RepayLoanDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
