import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {EmployeeLoanApplication} from '../../../../interfaces/EmployeeLoanApplication';
import {LoanApplicationService} from '../../../../services/loan-application.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-pending-loans-list',
  templateUrl: './pending-loans-list.component.html',
  styleUrls: ['./pending-loans-list.component.css']
})
export class PendingLoansListComponent implements OnInit, AfterViewInit {

  pendingLoans: EmployeeLoanApplication[] = [];
  showDetails = false;
  selectedLoan: EmployeeLoanApplication;

  dataSource: MatTableDataSource<EmployeeLoanApplication>;
  displayedColumns: string[] = ['amount', 'name', 'details'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private loanApplicationService: LoanApplicationService) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.loanApplicationService.getPendingLoans().subscribe(data => {
      this.pendingLoans = data;
      this.dataSource = new MatTableDataSource<EmployeeLoanApplication>(this.pendingLoans);
    });
  }

  showLoanDetails(loan: EmployeeLoanApplication): void {
    this.showDetails = true;
    this.selectedLoan = loan;
  }

  hideLoanDetails(): void {
    this.showDetails = false;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
