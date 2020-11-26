import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  redirect(): void {
    if (this.authService.isUser()) {
      this.router.navigate(['/user']);
    }
    if (this.authService.isEmployee()) {
      this.router.navigate(['/employee']);
    }
    if (this.authService.isAdmin()) {
      this.router.navigate(['/admin']);
    }
  }

}
