import { Component, OnInit } from '@angular/core';
import {UserLoanApplication} from '../../../../interfaces/UserLoanApplication';
import {LoanApplicationService} from '../../../../services/loan-application.service';

@Component({
  selector: 'app-applied-loans-list',
  templateUrl: './applied-loans-list.component.html',
  styleUrls: ['./applied-loans-list.component.css']
})
export class AppliedLoansListComponent implements OnInit {

  appliedLoans: UserLoanApplication[] = [];

  constructor(private loanApplicationService: LoanApplicationService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.loanApplicationService.getAppliedLoansForCustomer().subscribe(data => {
      this.appliedLoans = data;
    });
  }

}
