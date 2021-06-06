import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFinancesComponent } from './add-finances/add-finances.component';
import { AllFinancesComponent } from './all-finances/all-finances.component';
import { FinancesComponent } from './finances.component';


const financesRoutes: Routes = [
  {
    path: 'finances',
    component: FinancesComponent,
    children: [
      {
        path: 'all-finances',
        component: AllFinancesComponent,
      },
      {
        path: 'add-finances',
        component: AddFinancesComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(financesRoutes)],
  exports: [RouterModule],
})
export class FinancesRoutingModule {}
