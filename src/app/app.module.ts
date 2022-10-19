import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BudgetTableComponent } from './budget-table/budget-table.component';
import { BudgetFormComponent } from './budget-form/budget-form.component';
import { FormsModule } from '@angular/forms';
import { BudgetTotalComponent } from './budget-total/budget-total.component';

@NgModule({
  declarations: [AppComponent, BudgetTableComponent, BudgetFormComponent, BudgetTotalComponent],
  imports: [BrowserModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
