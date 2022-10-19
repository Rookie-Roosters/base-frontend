import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AutomationRoutingModule } from './automation-routing.module';
import { AutomationPageComponent } from './pages/automation-page/automation-page.component';

@NgModule({
  declarations: [AutomationPageComponent],
  imports: [CommonModule, AutomationRoutingModule],
})
export class AutomationModule {}
