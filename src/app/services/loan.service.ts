import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Loan} from '../interfaces/Loan';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http: HttpClient) { }

  public getLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>('http://localhost:8080/api/loans');
  }
}
