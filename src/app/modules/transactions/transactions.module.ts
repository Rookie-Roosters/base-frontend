import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionTileComponent } from './components';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsPageComponent } from './pages';

@NgModule({
  declarations: [TransactionTileComponent, TransactionsPageComponent],
  imports: [CommonModule, TransactionsRoutingModule],
})
export class TransactionsModule {}
