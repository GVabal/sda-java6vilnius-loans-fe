import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {User} from '../../interfaces/models/User';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  user: User = {email: '', role: ''};

  constructor(public authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.authService.auth.subscribe(authResponse => {
      try {
      this.user = authResponse.user;
      } catch (error) {
        // nothing
      }
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
