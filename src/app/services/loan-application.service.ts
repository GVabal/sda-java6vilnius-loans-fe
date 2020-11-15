import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserLoanApplication} from '../interfaces/UserLoanApplication';
import {EmployeeLoanApplication} from '../interfaces/EmployeeLoanApplication';

@Injectable({
  providedIn: 'root'
})
export class LoanApplicationService {

  constructor(private http: HttpClient) { }

  public getAppliedLoansForCustomer(): Observable<UserLoanApplication[]> {
    return this.http.get<UserLoanApplication[]>('http://localhost:8080/api/loan-applications/customer');
  }

  public getPendingLoansForEmployee(): Observable<EmployeeLoanApplication[]> {
    return this.http.get<EmployeeLoanApplication[]>('http://localhost:8080/api/loan-applications/employee');
  }
}
