import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationService } from '@authentication/services';

import { RootComponent } from '@core/components';
import { CoreModule } from '@core/core.module';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  imports: [BrowserModule, AppRoutingModule, CoreModule],
  providers: [AuthenticationService],
  bootstrap: [RootComponent],
  declarations: [],
})
export class AppModule {}
