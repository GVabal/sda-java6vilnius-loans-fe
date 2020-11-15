import {ApplicationStatus} from '../enums/ApplicationStatus';

export interface UserLoanApplication {
  amount: number;
  status: ApplicationStatus;
}
