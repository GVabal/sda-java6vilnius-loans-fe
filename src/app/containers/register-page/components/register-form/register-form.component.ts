import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../services/auth.service';
import {NgForm} from '@angular/forms';
import {CustomerRegisterRequest} from '../../../../interfaces/CustomerRegisterRequest';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  isLoading = false;
  isRegisterSuccessful = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  register(form: NgForm): void {
    if (!this.isLoading) {
      this.isLoading = true;
      const registerData: CustomerRegisterRequest = {
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        email: form.value.email,
        password: form.value.password,
        bankAccountNumber: form.value.bankAccountNumber
      };
      this.authService.register(registerData).subscribe(() => {
        form.resetForm();
        this.isLoading = false;
        this.isRegisterSuccessful = true;
      }, error => {
        this.isLoading = false;
      });
    }
  }

}
