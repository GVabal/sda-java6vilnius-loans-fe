import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-page',
  template: `
    <app-employee-list></app-employee-list>
  `,
  styles: []
})
export class AdminPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
