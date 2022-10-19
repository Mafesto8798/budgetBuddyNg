import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Expense } from './expense';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  expenses: Expense[] = [];
  private _totalExpenses = new BehaviorSubject<number>(0);
  readonly totalExpenses = this._totalExpenses.asObservable();

  constructor() {}

  addExpense(expense: Expense): void {
    this.expenses.push(expense);
    this._totalExpenses.next(this._totalExpenses.getValue() + expense.amount);
  }

  getTotalExpenses(): number {
    return this._totalExpenses.getValue();
  }
}
