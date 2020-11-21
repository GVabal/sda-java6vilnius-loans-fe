import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerLoanApplication} from '../interfaces/CustomerLoanApplication';
import {EmployeeLoanApplication} from '../interfaces/EmployeeLoanApplication';
import {LoanApplicationRequest} from '../interfaces/LoanApplicationRequest';

@Injectable({
  providedIn: 'root'
})
export class LoanApplicationService {

  constructor(private http: HttpClient) { }

  public getAppliedLoans(): Observable<CustomerLoanApplication[]> {
    return this.http.get<CustomerLoanApplication[]>('http://localhost:8080/api/loan-applications/customer');
  }

  public getPendingLoans(): Observable<EmployeeLoanApplication[]> {
    return this.http.get<EmployeeLoanApplication[]>('http://localhost:8080/api/loan-applications/employee');
  }

  public approveLoanWithId(id: number): Observable<void> {
    return this.http.post<void>('http://localhost:8080/api/loan-applications/employee/approve/' + id, null);
  }

  public rejectLoanWithId(id: number): Observable<void> {
    return this.http.post<void>('http://localhost:8080/api/loan-applications/employee/reject/' + id, null);
  }

  public applyForLoan(loanApplicationRequest: LoanApplicationRequest): Observable<void> {
    return this.http.post<void>('http://localhost:8080/api/loan-applications/customer/', loanApplicationRequest);
  }

  public takeLoan(id: number): Observable<void> {
    return this.http.post<void>('http://localhost:8080/api/loan-applications/customer/' + id, null);
  }
}
