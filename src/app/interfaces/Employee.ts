import {EmployeeStatus} from '../enums/EmployeeStatus';

export interface Employee {
  id: number;
  pid: string;
  email: string;
  status: EmployeeStatus;
}
