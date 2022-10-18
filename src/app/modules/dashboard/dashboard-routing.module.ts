import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NAVIGATION_ROUTES } from '@core/constants';
import { EmployeesPageComponent } from '@employees/pages';
import { DashboardPageComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
    children: [
      {
        path: NAVIGATION_ROUTES.DASHBOARD.EMPLOYEES,
        loadChildren: () => import('@employees/employees.module').then((m) => m.EmployeesModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
