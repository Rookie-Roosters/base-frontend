import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationBarComponent, SideMenuComponent } from './components';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './pages';

@NgModule({
  declarations: [SideMenuComponent, NavigationBarComponent, DashboardPageComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
