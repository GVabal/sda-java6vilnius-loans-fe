import { Component, OnInit } from '@angular/core';
import {LoanApplication} from '../../../../interfaces/LoanApplication';
import {LoanApplicationService} from '../../../../services/loan-application.service';

@Component({
  selector: 'app-applied-loans-list',
  templateUrl: './applied-loans-list.component.html',
  styleUrls: ['./applied-loans-list.component.css']
})
export class AppliedLoansListComponent implements OnInit {

  appliedLoans: LoanApplication[] = [];

  constructor(private loanApplicationService: LoanApplicationService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.loanApplicationService.getAppliedLoans().subscribe(data => {
      this.appliedLoans = data;
    });
  }

}
