import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../interfaces/Employee';
import {UserRegisterRequest} from '../interfaces/UserRegisterRequest';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:8080/api/employees');
  }

  public addEmployee(userRegisterRequest: UserRegisterRequest): Observable<void> {
    return this.http.post<void>('http://localhost:8080/api/employees/register', userRegisterRequest);
  }

  public terminateEmployee(id: number): Observable<void> {
    return this.http.delete<void>('http://localhost:8080/api/employees/' + id);
  }
}
