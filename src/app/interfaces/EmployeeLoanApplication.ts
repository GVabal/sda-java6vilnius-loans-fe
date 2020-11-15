import {Customer} from './Customer';

export interface EmployeeLoanApplication {
  id: number;
  amount: number;
  customer: Customer;
}
