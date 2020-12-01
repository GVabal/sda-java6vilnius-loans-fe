import {Component, OnInit} from '@angular/core';
import {LoginData} from '../../../../interfaces/payloads/LoginData';
import {Router} from '@angular/router';
import {AuthService} from '../../../../services/auth.service';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginFailed = false;
  isLoading = false;
  form: FormGroup;

  constructor(private authService: AuthService,
              private router: Router,
              private fb: FormBuilder) {
  }

  get email(): AbstractControl {
    return this.form.get('email');
  }

  get password(): AbstractControl {
    return this.form.get('password');
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required
      ]]
    });
  }

  login(): void {
    if (!this.isLoading) {
      this.isLoading = true;
      const loginData: LoginData = {
        email: this.form.value.email,
        password: this.form.value.password
      };
      this.authService.login(loginData).subscribe(() => {
        this.router.navigate(['/']);
        this.isLoading = false;
      }, error => {
        this.isLoading = false;
        this.loginFailed = true;
      });
    }
  }
}
