import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../interfaces/Employee';
import {UserRegisterRequest} from '../interfaces/UserRegisterRequest';
import {apiUrl} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {
  }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(apiUrl + 'employees');
  }

  public addEmployee(userRegisterRequest: UserRegisterRequest): Observable<void> {
    return this.http.post<void>(apiUrl + 'employees/register', userRegisterRequest);
  }

  public terminateEmployee(id: number): Observable<void> {
    return this.http.delete<void>(apiUrl + 'employees/' + id);
  }
}
