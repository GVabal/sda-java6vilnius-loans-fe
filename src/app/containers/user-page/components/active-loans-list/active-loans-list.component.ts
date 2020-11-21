import { Component, OnInit } from '@angular/core';
import {Loan} from '../../../../interfaces/Loan';
import {LoanService} from '../../../../services/loan.service';

@Component({
  selector: 'app-active-loans-list',
  templateUrl: './active-loans-list.component.html',
  styleUrls: ['./active-loans-list.component.css']
})
export class ActiveLoansListComponent implements OnInit {

  loans: Loan[] = [];

  constructor(private loanService: LoanService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.loanService.getLoans().subscribe(data => {
      this.loans = data;
    });
  }

}
