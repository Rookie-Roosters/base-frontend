import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BanksRoutingModule } from './banks-routing.module';
import { AddBankComponent } from './pages/add-bank/add-bank.component';

@NgModule({
  declarations: [AddBankComponent],
  imports: [FormsModule, ReactiveFormsModule, CommonModule, BanksRoutingModule],
})
export class BanksModule {}
