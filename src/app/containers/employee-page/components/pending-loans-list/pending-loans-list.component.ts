import { Component, OnInit } from '@angular/core';
import {EmployeeLoanApplication} from '../../../../interfaces/EmployeeLoanApplication';
import {LoanApplicationService} from '../../../../services/loan-application.service';

@Component({
  selector: 'app-pending-loans-list',
  templateUrl: './pending-loans-list.component.html',
  styleUrls: ['./pending-loans-list.component.css']
})
export class PendingLoansListComponent implements OnInit {

  pendingLoans: EmployeeLoanApplication[] = [];

  constructor(private loanApplicationService: LoanApplicationService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.loanApplicationService.getPendingLoansForEmployee().subscribe(data => {
      this.pendingLoans = data;
    });
  }
}
