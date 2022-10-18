import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LogInComponent, SignUpComponent } from './components';
import { AuthPageComponent } from './pages';

@NgModule({
  declarations: [LogInComponent, SignUpComponent, AuthPageComponent],
  imports: [CommonModule, AuthenticationRoutingModule],
})
export class AuthenticationModule {}
