import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { Expense } from '../expense';

@Component({
  selector: 'app-budget-table',
  templateUrl: './budget-table.component.html',
  styleUrls: ['./budget-table.component.css'],
})
export class BudgetTableComponent implements OnInit {
  constructor(private budgetService: BudgetService) {}

  displayExpenses: Expense[] = [];

  ngOnInit(): void {
    this.displayExpenses = this.budgetService.expenses;
  }
}
