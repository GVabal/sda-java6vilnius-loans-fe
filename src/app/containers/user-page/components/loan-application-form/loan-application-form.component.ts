import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoanApplicationRequest} from '../../../../interfaces/payloads/LoanApplicationRequest';
import {LoanApplicationService} from '../../../../services/loan-application.service';

@Component({
  selector: 'app-loan-application-form',
  templateUrl: './loan-application-form.component.html',
  styleUrls: ['./loan-application-form.component.css']
})
export class LoanApplicationFormComponent implements OnInit {

  form: FormGroup;
  success = false;
  error = '';

  constructor(private loanApplicationService: LoanApplicationService,
              private fb: FormBuilder) {
  }

  get amount(): AbstractControl {
    return this.form.get('amount');
  }

  get termMonths(): AbstractControl {
    return this.form.get('termMonths');
  }

  get monthlyIncome(): AbstractControl {
    return this.form.get('monthlyIncome');
  }

  get monthlyLiabilities(): AbstractControl {
    return this.form.get('monthlyLiabilities');
  }

  get loanReason(): AbstractControl {
    return this.form.get('loanReason');
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      amount: [100, [
        Validators.required,
        Validators.min(100),
        Validators.max(15000)
      ]],
      termMonths: [6, [
        Validators.required,
        Validators.min(6),
        Validators.max(60)
      ]],
      monthlyIncome: [0, [
        Validators.required,
        Validators.min(0)
      ]],
      monthlyLiabilities: [0, [
        Validators.required,
        Validators.min(0)
      ]],
      loanReason: ['', [
        Validators.required,
        Validators.maxLength(188)
      ]]
    });
  }

  submit(): void {
    const request: LoanApplicationRequest = this.form.value;
    this.loanApplicationService.applyForLoan(request).subscribe(() => {
      this.form.disable();
      this.success = true;
    }, error => {
      this.error = error;
    });
  }
}
