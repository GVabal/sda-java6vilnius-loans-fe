import {Component, Input, OnInit} from '@angular/core';
import {EmployeeLoanApplication} from '../../../../interfaces/EmployeeLoanApplication';
import {LoanApplicationService} from '../../../../services/loan-application.service';

@Component({
  selector: 'app-pending-loan',
  templateUrl: './pending-loan.component.html',
  styleUrls: ['./pending-loan.component.css']
})
export class PendingLoanComponent implements OnInit {

  @Input() loan: EmployeeLoanApplication;
  showSubmitMessage = false;

  constructor(private loanApplicationService: LoanApplicationService) {
  }

  ngOnInit(): void {
  }

  approveLoan(id: number): void {
    this.loanApplicationService.approveLoanWithId(id).subscribe(() => {});
    this.showSubmitMessage = true;
    window.location.reload();
  }

  rejectLoan(id: number): void {
    this.loanApplicationService.rejectLoanWithId(id).subscribe(() => {});
    this.showSubmitMessage = true;
    window.location.reload();
  }

}
