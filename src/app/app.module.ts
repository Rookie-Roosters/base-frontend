import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RootComponent } from '@core/components';
import { CoreModule } from '@core/core.module';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  imports: [BrowserModule, AppRoutingModule, CoreModule],
  bootstrap: [RootComponent],
  declarations: [],
})
export class AppModule {}
