import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PaymentRequest} from '../interfaces/payloads/PaymentRequest';
import {apiUrl} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) {
  }

  public payBackLoan(id: number, amount: number): Observable<void> {
    const requestBody: PaymentRequest = {loanId: id, amount};
    return this.http.post<void>(apiUrl + 'payments', requestBody);
  }
}
