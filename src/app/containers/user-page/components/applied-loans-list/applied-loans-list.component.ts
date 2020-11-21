import { Component, OnInit } from '@angular/core';
import {CustomerLoanApplication} from '../../../../interfaces/CustomerLoanApplication';
import {LoanApplicationService} from '../../../../services/loan-application.service';

@Component({
  selector: 'app-applied-loans-list',
  templateUrl: './applied-loans-list.component.html',
  styleUrls: ['./applied-loans-list.component.css']
})
export class AppliedLoansListComponent implements OnInit {

  appliedLoans: CustomerLoanApplication[] = [];

  constructor(private loanApplicationService: LoanApplicationService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.loanApplicationService.getAppliedLoans().subscribe(data => {
      this.appliedLoans = data;
    });
  }

  takeLoan(loanApplication: CustomerLoanApplication): void {
    this.loanApplicationService.takeLoan(loanApplication.id).subscribe(() => {});
    window.location.reload();
  }
}
