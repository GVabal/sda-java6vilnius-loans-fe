import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(err => {
      if (err.status === 401 && err.url.indexOf('/refresh-token') > 0) {
        this.authService.logout();
        location.reload();
      }
      if (err.status === 403) {
        this.router.navigate(['/']);
      }
      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
