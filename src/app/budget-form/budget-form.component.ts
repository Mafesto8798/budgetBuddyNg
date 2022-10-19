import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.css'],
})
export class BudgetFormComponent implements OnInit {
  formAmount: number = 0;
  formDesc: string = '';
  formCategory: string = '';

  constructor(private budgetService: BudgetService) {}

  ngOnInit(): void {}

  submitForm(): void {
    this.budgetService.addExpense({
      amount: this.formAmount,
      description: this.formDesc,
      category: this.formCategory,
    });
    this.formAmount = 0;
    this.formCategory = '';
    this.formDesc = '';
  }
}
