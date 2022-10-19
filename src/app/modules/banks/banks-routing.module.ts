import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NAVIGATION_ROUTES } from '@core/constants';
import { AddBankComponent } from './pages/add-bank/add-bank.component';

const routes: Routes = [
  {
    path: NAVIGATION_ROUTES.BANKS.ADD,
    component: AddBankComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BanksRoutingModule {}
