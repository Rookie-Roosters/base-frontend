import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeTileComponent } from './components';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesPageComponent } from './pages';

@NgModule({
  declarations: [EmployeeTileComponent, EmployeesPageComponent],
  imports: [CommonModule, EmployeesRoutingModule],
})
export class EmployeesModule {}
