import {Customer} from './Customer';

export interface EmployeeLoanApplication {
  id: number;
  amount: number;
  termMonths: number;
  interestRatePerYear: number;
  loanReason: string;
  customer: Customer;
}
