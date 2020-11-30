import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-employee-page',
  template: `
    <app-pending-loans-list></app-pending-loans-list>
  `,
  styles: []
})
export class EmployeePageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
