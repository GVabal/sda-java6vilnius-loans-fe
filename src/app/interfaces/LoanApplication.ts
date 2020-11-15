import {ApplicationStatus} from '../enums/ApplicationStatus';

export interface LoanApplication {
  amount: number;
  status: ApplicationStatus;
}
