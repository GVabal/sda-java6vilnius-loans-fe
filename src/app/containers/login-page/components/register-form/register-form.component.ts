import { Component, OnInit } from '@angular/core';
import {UserRegisterRequest} from '../../../../interfaces/UserRegisterRequest';
import {AuthService} from '../../../../services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerData: UserRegisterRequest = {username: '', email: '', password: ''};
  isLoading = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  register(): void {
    if (!this.isLoading) {
      this.isLoading = true;
      this.registerData.username = this.registerData.email.split('@')[0];
      this.authService.register(this.registerData).subscribe(() => {
        this.registerData = {username: '', email: '', password: ''};
        this.isLoading = false;
      }, error => {
        this.isLoading = false;
        console.log(error);
      });
    }
  }

}
