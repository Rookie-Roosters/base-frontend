import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutomationPageComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: AutomationPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutomationRoutingModule {}
