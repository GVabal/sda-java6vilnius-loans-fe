import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoanApplication} from '../interfaces/LoanApplication';

@Injectable({
  providedIn: 'root'
})
export class LoanApplicationService {

  constructor(private http: HttpClient) { }

  public getAppliedLoans(): Observable<LoanApplication[]> {
    return this.http.get<LoanApplication[]>('http://localhost:8080/api/loan-applications/');
  }
}
