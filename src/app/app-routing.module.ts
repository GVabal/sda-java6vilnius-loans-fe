import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {UserPageComponent} from './user-page/user-page.component';
import {EmployeePageComponent} from './employee-page/employee-page.component';
import {AdminPageComponent} from './admin-page/admin-page.component';
import {HomePageComponent} from './home-page/home-page.component';

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
    path: 'user',
    component: UserPageComponent,
  },
  {
    path: 'employee',
    component: EmployeePageComponent,
  },
  {
    path: 'admin',
    component: AdminPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
