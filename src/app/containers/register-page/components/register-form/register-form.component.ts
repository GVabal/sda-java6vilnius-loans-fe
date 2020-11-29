import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../../services/auth.service';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerRegisterRequest} from '../../../../interfaces/CustomerRegisterRequest';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  isLoading = false;
  isRegisterSuccessful = false;
  error = '';

  form: FormGroup;

  constructor(private authService: AuthService,
              private fb: FormBuilder) {
  }

  get firstName(): AbstractControl {
    return this.form.get('firstName');
  }

  get lastName(): AbstractControl {
    return this.form.get('lastName');
  }

  get email(): AbstractControl {
    return this.form.get('email');
  }

  get password(): AbstractControl {
    return this.form.get('password');
  }

  get bankAccountNumber(): AbstractControl {
    return this.form.get('bankAccountNumber');
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', [
        Validators.required,
        Validators.pattern(/^{L}{2,}$/i)
      ]],
      lastName: ['', [
        Validators.required,
        Validators.pattern(/^{L}{2,}$/i)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(10)
      ]],
      bankAccountNumber: ['', [
        Validators.required,
        Validators.pattern(/^\w{2}\d{8,12}$/i)
      ]]
    });
  }

  register(): void {
    if (!this.isLoading) {
      this.isLoading = true;
      const registerData: CustomerRegisterRequest = {
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        email: this.form.value.email,
        password: this.form.value.password,
        bankAccountNumber: this.form.value.bankAccountNumber
      };
      this.authService.register(registerData).subscribe(() => {
        this.form.reset();
        this.isLoading = false;
        this.isRegisterSuccessful = true;
      }, error => {
        this.isLoading = false;
        this.error = error;
      });
    }
  }

}
