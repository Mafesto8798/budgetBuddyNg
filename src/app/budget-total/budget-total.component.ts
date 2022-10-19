import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-budget-total',
  templateUrl: './budget-total.component.html',
  styleUrls: ['./budget-total.component.css'],
})
export class BudgetTotalComponent implements OnInit {
  totalExpenses: number = 0;

  constructor(private budgetService: BudgetService) {}

  ngOnInit(): void {
    this.budgetService.totalExpenses.subscribe((e) => {
      this.totalExpenses = e;
      console.log(this.totalExpenses);
    });
  }
}
