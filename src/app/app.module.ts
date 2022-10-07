import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './modules/home/home.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { RootComponent } from './core/components/root/root.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    HomeModule
  ],
  declarations: [RootComponent],
  bootstrap: [RootComponent]
})
export class AppModule { }
