import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FinancesComponent } from './finances.component';
import { AddFinancesComponent } from './add-finances/add-finances.component';
import { AllFinancesComponent } from './all-finances/all-finances.component';
import { FinanceComponent } from './components/finance/finance.component';
import { FinancesHeaderComponent } from './components/finances-header/finances-header.component';
import { FinancesRoutingModule } from './finances.routing.module';
import { FinanceResultsComponent } from './components/finance-results/finance-results.component';

@NgModule({
    declarations: [FinancesComponent, AddFinancesComponent, AllFinancesComponent, FinanceComponent, FinancesHeaderComponent, FinanceResultsComponent],
    imports: [CommonModule, FormsModule, FinancesRoutingModule],
    exports: [FinancesComponent, AllFinancesComponent, FinanceComponent, FinanceResultsComponent],
    providers: [],
})
export class FinancesModule { }
