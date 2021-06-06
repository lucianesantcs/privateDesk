import { NgModule } from '@angular/core';

import { FinancesComponent } from './finances.component';
import { AddFinancesComponent } from './add-finances/add-finances.component';
import { AllFinancesComponent } from './all-finances/all-finances.component';
import { FinanceComponent } from './components/finance/finance.component';
import { FinancesHeaderComponent } from './components/finances-header/finances-header.component';

@NgModule({
    imports: [],
    exports: [],
    declarations: [FinancesComponent, AddFinancesComponent, AllFinancesComponent, FinanceComponent, FinancesHeaderComponent],
    providers: [],
})
export class FinancesModule { }
