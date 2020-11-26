import { Component, OnInit } from '@angular/core';
import {Loan} from '../../../../interfaces/Loan';
import {LoanService} from '../../../../services/loan.service';
import {PaymentService} from '../../../../services/payment.service';

@Component({
  selector: 'app-active-loans-list',
  templateUrl: './active-loans-list.component.html',
  styleUrls: ['./active-loans-list.component.css']
})
export class ActiveLoansListComponent implements OnInit {

  selectedLoan: Loan;
  amount: number;
  loans: Loan[] = [];
  displayPaymentWindow = false;
  paymentSuccess = false;

  displayedColumns: string[] = ['amountRepay', 'amountPayed', 'repay'];

  constructor(private loanService: LoanService,
              private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.loanService.getLoans().subscribe(data => {
      this.loans = data;
    });
  }

  openRepayWindowForLoan(loan: Loan): void {
    this.displayPaymentWindow = true;
    this.selectedLoan = loan;
  }

  closeRepayWindowForLoan(): void {
    this.displayPaymentWindow = false;
    window.location.reload();
  }

  repayLoan(id: number, amount: number): void {
    this.paymentService.payBackLoan(id, amount).subscribe(() => this.paymentSuccess = true);
  }

}
