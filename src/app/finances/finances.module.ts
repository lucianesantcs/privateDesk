import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FinancesComponent } from './finances.component';
import { AddFinancesComponent } from './add-finances/add-finances.component';
import { AllFinancesComponent } from './all-finances/all-finances.component';
import { FinancesRoutingModule } from './finances.routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [FinancesComponent, AddFinancesComponent, AllFinancesComponent],
    imports: [CommonModule, FormsModule, FinancesRoutingModule, SharedModule],
    exports: [FinancesComponent, AllFinancesComponent],
    providers: [],
})
export class FinancesModule { }
