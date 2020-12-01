import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Loan} from '../interfaces/models/Loan';
import {apiUrl} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http: HttpClient) {
  }

  public getLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(apiUrl + 'loans');
  }
}
