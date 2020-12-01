export interface LoanApplicationRequest {
  amount: number;
  termMonths: number;
  loanReason: string;
  monthlyIncome: number;
  monthlyLiabilities: number;
}
