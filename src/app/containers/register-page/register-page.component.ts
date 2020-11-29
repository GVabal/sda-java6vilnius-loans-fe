import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-register-page',
  template: `
    <app-register-form></app-register-form>
  `,
  styles: []
})
export class RegisterPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
