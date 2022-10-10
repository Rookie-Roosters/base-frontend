import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NAVIGATION_ROUTES } from 'src/app/core/constants/navigation-routes.constant';
import { LogInComponent, SignUpComponent } from './components';
import { AuthenticationPageComponent } from './pages/authentication-page/authentication-page.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationPageComponent,
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
