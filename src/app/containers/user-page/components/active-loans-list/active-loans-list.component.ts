import { Component, OnInit } from '@angular/core';
import {Loan} from '../../../../interfaces/Loan';
import {LoanService} from '../../../../services/loan.service';
import {MatDialog} from '@angular/material/dialog';
import {RepayLoanDialogComponent} from '../repay-loan-dialog/repay-loan-dialog.component';

@Component({
  selector: 'app-active-loans-list',
  templateUrl: './active-loans-list.component.html',
  styleUrls: ['./active-loans-list.component.css']
})
export class ActiveLoansListComponent implements OnInit {

  loans: Loan[] = [];

  displayedColumns: string[] = ['amountRepay', 'amountPayed', 'repay'];

  constructor(private loanService: LoanService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.loanService.getLoans().subscribe(data => {
      this.loans = data;
    });
  }

  openRepayLoanDialog(loan: Loan): void {
    this.dialog.open(RepayLoanDialogComponent, {
      width: '300px',
      data: loan,
    });
  }



}
