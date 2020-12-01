import {Component, OnInit} from '@angular/core';
import {Employee} from '../../../../interfaces/models/Employee';
import {EmployeeService} from '../../../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  displayedColumns: string[] = ['pid', 'email', 'terminate'];

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  terminateEmployee(id: number): void {
    this.employeeService.terminateEmployee(id).subscribe(() => window.location.reload());
  }

}
