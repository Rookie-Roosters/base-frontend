import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NAVIGATION_ROUTES } from '@core/constants';

import { LogInComponent, SignUpComponent } from './components';
import { AuthPageComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: AuthPageComponent,
    children: [
      {
        path: NAVIGATION_ROUTES.AUTHENTICATION.LOG_IN,
        component: LogInComponent,
      },
      {
        path: NAVIGATION_ROUTES.AUTHENTICATION.SIGN_UP,
        component: SignUpComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
