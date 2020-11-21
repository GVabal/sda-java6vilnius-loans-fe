import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoanApplicationRequest} from '../../../../interfaces/LoanApplicationRequest';
import {LoanApplicationService} from '../../../../services/loan-application.service';

@Component({
  selector: 'app-loan-application-form',
  templateUrl: './loan-application-form.component.html',
  styleUrls: ['./loan-application-form.component.css']
})
export class LoanApplicationFormComponent implements OnInit {

  constructor(private loanApplicationService: LoanApplicationService) {
  }

  ngOnInit(): void {
  }

  submitForm(form: NgForm): void {
    const request: LoanApplicationRequest = form.value;
    this.loanApplicationService.applyForLoan(request).subscribe(() => window.location.reload());
  }
}
