import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NAVIGATION_ROUTES } from '@core/constants';
import { DashboardPageComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
    children: [
      {
        path: NAVIGATION_ROUTES.DASHBOARD.HOME,
        loadChildren: () => import('@home/home.module').then((m) => m.HomeModule),
      },
      {
        path: NAVIGATION_ROUTES.DASHBOARD.EMPLOYEES,
        loadChildren: () => import('@employees/employees.module').then((m) => m.EmployeesModule),
      },
      {
        path: NAVIGATION_ROUTES.DASHBOARD.AUTOMATION,
        loadChildren: () => import('@automation/automation.module').then((m) => m.AutomationModule),
      },
      {
        path: NAVIGATION_ROUTES.DASHBOARD.BANKS,
        loadChildren: () => import('@banks/banks.module').then((m) => m.BanksModule),
      },
      {
        path: NAVIGATION_ROUTES.DASHBOARD.TRANSACTIONS,
        loadChildren: () => import('@transactions/transactions.module').then((m) => m.TransactionsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
