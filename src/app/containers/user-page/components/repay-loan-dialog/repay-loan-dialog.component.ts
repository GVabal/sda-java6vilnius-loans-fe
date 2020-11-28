import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PaymentService} from '../../../../services/payment.service';
import {Loan} from '../../../../interfaces/Loan';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-repay-loan-dialog',
  templateUrl: './repay-loan-dialog.component.html',
  styleUrls: ['./repay-loan-dialog.component.css']
})
export class RepayLoanDialogComponent implements OnInit {

  paymentSuccess = false;
  amount: number;
  error = '';
  form: FormControl;

  constructor(private dialogRef: MatDialogRef<RepayLoanDialogComponent>,
              private paymentService: PaymentService,
              @Inject(MAT_DIALOG_DATA) public loan: Loan) {
  }

  ngOnInit(): void {
    this.form = new FormControl(
      0, [
        Validators.required,
        Validators.min(0.01),
        Validators.max(this.loan.amountToRepay)
      ]);
  }

  close(): void {
    this.dialogRef.close(null);
  }

  repayLoan(): void {
    this.paymentService.payBackLoan(this.loan.id, this.amount).subscribe(() => {
      this.paymentSuccess = true;
      this.loan.amountToRepay -= this.amount;
      this.loan.amountPayed += this.amount;
      this.form.reset();
    }, error => {
      this.error = error;
    });
  }

}
