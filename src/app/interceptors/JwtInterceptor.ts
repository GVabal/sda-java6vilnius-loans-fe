import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from '../services/auth.service';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {catchError, filter, switchMap, take} from 'rxjs/operators';
import {apiUrl} from '../../environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  private refreshingInProgress = false;
  private refreshTokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const auth = this.authService.authValue;
    const isLoggedIn = auth && auth.accessToken;
    const isApiUrl = req.url.startsWith(apiUrl);
    if (isLoggedIn && isApiUrl) {
      req = this.addToken(req, auth.accessToken);
    }
    return next.handle(req).pipe(catchError(err => {
      if (err.status === 401) {
        return this.refreshToken(req, next);
      }
      return throwError(err);
    }));
  }

  private addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({setHeaders: {Authorization: `Bearer ${token}`}});
  }

  private refreshToken(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.refreshingInProgress) {
      this.refreshingInProgress = true;
      this.refreshTokenSubject.next(null);
      return this.authService.refreshToken().pipe(
        switchMap(auth => {
          this.refreshingInProgress = false;
          this.refreshTokenSubject.next(auth.accessToken);
          return next.handle(this.addToken(req, auth.accessToken));
        }));
    }
    return this.refreshTokenSubject.pipe(
      filter(token => token !== null),
      take(1),
      switchMap(token => {
        return next.handle(this.addToken(req, token));
      }));
  }
}
