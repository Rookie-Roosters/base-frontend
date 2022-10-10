import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NameValidatorDirective } from 'src/app/shared/directives'; 
import {
  ConfirmPasswordDirective,
  PasswordValidatorDirective,
} from 'src/app/shared/directives'; 
import { LogInComponent, SignUpComponent } from './components';
import { AuthenticationPageComponent } from './pages';
import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
  declarations: [
    NameValidatorDirective,
    PasswordValidatorDirective,
    ConfirmPasswordDirective,
    LogInComponent,
    SignUpComponent,
    AuthenticationPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthenticationRoutingModule,
  ],
})
export class AuthenticationModule {}
