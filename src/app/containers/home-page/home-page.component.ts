import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  isScreenSmall: boolean;

  constructor(public authService: AuthService, private router: Router, private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });
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
