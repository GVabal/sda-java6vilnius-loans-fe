import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../../../services/employee.service';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserRegisterRequest} from '../../../../interfaces/UserRegisterRequest';

@Component({
  selector: 'app-add-employee-form',
  templateUrl: './add-employee-form.component.html',
  styleUrls: ['./add-employee-form.component.css']
})
export class AddEmployeeFormComponent implements OnInit {

  form: FormGroup;
  success = false;
  error = '';

  constructor(private employeeService: EmployeeService,
              private fb: FormBuilder) {
  }

  get email(): AbstractControl {
    return this.form.get('email');
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]]
    });
  }

  submit(): void {
    const request: UserRegisterRequest = {
      email: this.form.value.email,
      password: 'password',
    };
    this.employeeService.addEmployee(request).subscribe(() => {
      this.success = true;
      this.error = '';
    }, error => {
      this.error = error;
    });
  }

}
