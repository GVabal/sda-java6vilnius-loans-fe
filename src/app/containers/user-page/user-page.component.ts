import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-page',
  template: `
    <mat-tab-group>
      <mat-tab label="Active Loans">
        <app-active-loans-list></app-active-loans-list>
      </mat-tab>
      <mat-tab label="Applied Loans">
        <app-applied-loans-list></app-applied-loans-list>
      </mat-tab>
    </mat-tab-group>
  `,
  styles: []
})
export class UserPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
