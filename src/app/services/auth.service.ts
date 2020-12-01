import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {AuthResponse} from '../interfaces/payloads/AuthResponse';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {LoginData} from '../interfaces/payloads/LoginData';
import {Role} from '../enums/Role';
import {CustomerRegisterRequest} from '../interfaces/payloads/CustomerRegisterRequest';
import {apiUrl} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public auth: Observable<AuthResponse>;
  private authSubject: BehaviorSubject<AuthResponse>;

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
    return this.isAuthenticated() && this.authValue.user.role === Role.ROLE_CUSTOMER;
  }

  register(customerRegisterRequest: CustomerRegisterRequest): Observable<void> {
    return this.http.post<void>(apiUrl + 'auth/register', customerRegisterRequest);
  }

  login(userLogin: LoginData): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(apiUrl + 'auth/login', userLogin)
      .pipe(map(auth => this.saveAndReturnAuth(auth)));
  }

  refreshToken(): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(apiUrl + 'auth/refresh-token', {refreshToken: this.authValue.refreshToken})
      .pipe(map(auth => this.saveAndReturnAuth(auth)));
  }

  logout(): void {
    localStorage.removeItem('auth');
    this.authSubject.next(null);
  }

  private saveAndReturnAuth(authResponse: AuthResponse): AuthResponse {
    if (authResponse && authResponse.accessToken) {
      localStorage.setItem('auth', JSON.stringify(authResponse));
      this.authSubject.next(authResponse);
    }
    return authResponse;
  }
}
