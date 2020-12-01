import {ApplicationStatus} from '../../enums/ApplicationStatus';

export interface CustomerLoanApplication {
  id: number;
  amount: number;
  termMonths: number;
  interestRatePerYear: number;
  loanReason: string;
  status: ApplicationStatus;
  datetimeApplied: Date;
}
