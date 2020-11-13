import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {AuthResponse} from '../interfaces/AuthResponse';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {LoginData} from '../interfaces/LoginData';
import {Role} from '../enums/Role';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authSubject: BehaviorSubject<AuthResponse>;
  public auth: Observable<AuthResponse>;

  constructor(private http: HttpClient) {
    this.authSubject = new BehaviorSubject<AuthResponse>(JSON.parse(localStorage.getItem('auth')));
    this.auth = this.authSubject.asObservable();
  }

  public get authValue(): AuthResponse {
    return this.authSubject.value;
  }

  public isAuthenticated(): boolean {
    return !!this.authValue && !!this.authValue.user;
  }

  public isAdmin(): boolean {
    return this.isAuthenticated() && this.authValue.user.role === Role.ROLE_ADMIN;
  }

  public isEmployee(): boolean {
    return this.isAuthenticated() && this.authValue.user.role === Role.ROLE_EMPLOYEE;
  }

  public isUser(): boolean {
    return this.isAuthenticated() && this.authValue.user.role === Role.ROLE_USER;
  }

  login(userLogin: LoginData): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('http://localhost:8080/api/auth/login', userLogin)
      .pipe(map(auth => this.saveAndReturnAuth(auth)));
  }

  refreshToken(): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('http://localhost:8080/api/auth/refresh-token', {refreshToken: this.authValue.refreshToken})
      .pipe(map(auth => this.saveAndReturnAuth(auth)));
  }

  private saveAndReturnAuth(authResponse: AuthResponse): AuthResponse {
    if (authResponse && authResponse.accessToken) {
      localStorage.setItem('auth', JSON.stringify(authResponse));
      this.authSubject.next(authResponse);
    }
    return authResponse;
  }

  logout(): void {
    localStorage.removeItem('auth');
    this.authSubject.next(null);
  }
}
