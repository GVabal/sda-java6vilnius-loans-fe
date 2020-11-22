import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PaymentRequest} from '../interfaces/PaymentRequest';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  public payBackLoan(id: number, amount: number): Observable<void> {
    const requestBody: PaymentRequest = {loanId: id, amount};
    return this.http.post<void>('http://localhost:8080/api/payments', requestBody);
  }
}
