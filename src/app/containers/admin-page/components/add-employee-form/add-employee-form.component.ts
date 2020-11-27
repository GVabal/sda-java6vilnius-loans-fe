import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../../../services/employee.service';
import {NgForm} from '@angular/forms';
import {UserRegisterRequest} from '../../../../interfaces/UserRegisterRequest';

@Component({
  selector: 'app-add-employee-form',
  templateUrl: './add-employee-form.component.html',
  styleUrls: ['./add-employee-form.component.css']
})
export class AddEmployeeFormComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  submitForm(form: NgForm): void {
    const request: UserRegisterRequest = {
      email: form.value.email,
      password: 'password',
    };
    this.employeeService.addEmployee(request).subscribe(() => window.location.reload());
  }

}
