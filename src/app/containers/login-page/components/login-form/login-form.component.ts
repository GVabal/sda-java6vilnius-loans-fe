import { Component, OnInit } from '@angular/core';
import {LoginData} from '../../../../interfaces/LoginData';
import {Router} from '@angular/router';
import {AuthService} from '../../../../services/auth.service';
import {UserRegisterRequest} from '../../../../interfaces/UserRegisterRequest';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginData: LoginData = {email: '', password: ''};
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    if (!this.isLoading) {
      this.isLoading = true;
      this.authService.login(this.loginData).subscribe(() => {
        this.router.navigate(['/']);
        this.isLoading = false;
      }, error => {
        this.isLoading = false;
        console.log(error.error.message);
      });
    }
  }
}
