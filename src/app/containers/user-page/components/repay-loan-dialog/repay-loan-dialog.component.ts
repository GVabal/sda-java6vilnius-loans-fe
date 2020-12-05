import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PaymentService} from '../../../../services/payment.service';
import {Loan} from '../../../../interfaces/models/Loan';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-repay-loan-dialog',
  templateUrl: './repay-loan-dialog.component.html',
  styleUrls: ['./repay-loan-dialog.component.css']
})
export class RepayLoanDialogComponent implements OnInit {

  paymentSuccess = false;
  error = '';
  form: FormGroup;

  constructor(private dialogRef: MatDialogRef<RepayLoanDialogComponent>,
              private fb: FormBuilder,
              private paymentService: PaymentService,
              @Inject(MAT_DIALOG_DATA) public loan: Loan) {
  }

  get amount(): AbstractControl {
    return this.form.get('amount');
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      amount: [null, [
        Validators.required,
        Validators.min(0.01),
        Validators.max(this.loan.amountToRepay)
      ]]
    });
  }

  close(): void {
    this.dialogRef.close(null);
  }

  repayLoan(): void {
    this.paymentService.payBackLoan(this.loan.id, this.amount.value).subscribe(() => {
      this.paymentSuccess = true;
      this.loan.amountToRepay -= this.amount.value;
      this.loan.amountPayed += this.amount.value;
      this.form.reset();
    }, error => {
      this.error = error;
    });
  }

}
