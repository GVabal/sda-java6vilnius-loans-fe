import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './containers/login-page/login-page.component';
import {UserPageComponent} from './containers/user-page/user-page.component';
import {EmployeePageComponent} from './containers/employee-page/employee-page.component';
import {AdminPageComponent} from './containers/admin-page/admin-page.component';
import {HomePageComponent} from './containers/home-page/home-page.component';
import {AuthGuard} from './guards/AuthGuard';
import {Role} from './enums/Role';
import {NotFoundPageComponent} from './containers/not-found-page/not-found-page.component';
import {RegisterPageComponent} from './containers/register-page/register-page.component';
import {LoanApplicationFormComponent} from './containers/user-page/components/loan-application-form/loan-application-form.component';
import {AddEmployeeFormComponent} from './containers/admin-page/components/add-employee-form/add-employee-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'user',
    component: UserPageComponent,
    canActivate: [AuthGuard],
    data: {role: Role.ROLE_CUSTOMER},
  },
  {
    path: 'user/apply',
    component: LoanApplicationFormComponent,
    canActivate: [AuthGuard],
    data: {role: Role.ROLE_CUSTOMER},
  },
  {
    path: 'employee',
    component: EmployeePageComponent,
    canActivate: [AuthGuard],
    data: {role: Role.ROLE_EMPLOYEE},
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [AuthGuard],
    data: {role: Role.ROLE_ADMIN},
  },
  {
    path: 'admin/new-employee',
    component: AddEmployeeFormComponent,
    canActivate: [AuthGuard],
    data: {role: Role.ROLE_ADMIN},
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
