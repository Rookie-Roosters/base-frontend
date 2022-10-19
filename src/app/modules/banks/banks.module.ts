import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankTileComponent } from './components';
import { BanksRoutingModule } from './banks-routing.module';
import { BanksPageComponent } from './pages';

@NgModule({
  declarations: [BankTileComponent, BanksPageComponent],
  imports: [CommonModule, BanksRoutingModule],
})
export class BanksModule {}
