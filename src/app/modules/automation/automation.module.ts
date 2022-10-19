import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutomationTileComponent } from './components';
import { AutomationRoutingModule } from './automation-routing.module';
import { AutomationPageComponent } from './pages';

@NgModule({
  declarations: [AutomationTileComponent, AutomationPageComponent],
  imports: [CommonModule, AutomationRoutingModule],
})
export class AutomationModule {}
