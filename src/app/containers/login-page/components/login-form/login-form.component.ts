import { Component, OnInit } from '@angular/core';
import {LoginData} from '../../../../interfaces/LoginData';
import {Router} from '@angular/router';
import {AuthService} from '../../../../services/auth.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  isLoading = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(form: NgForm): void {
    if (!this.isLoading) {
      this.isLoading = true;
      const loginData: LoginData = {
        email: form.value.email,
        password: form.value.password
      };
      this.authService.login(loginData).subscribe(() => {
        this.router.navigate(['/']);
        this.isLoading = false;
      }, error => {
        this.isLoading = false;
      });
    }
  }
}
