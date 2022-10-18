import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@core/components';
import { NAVIGATION_ROUTES } from '@core/constants';

const routes: Routes = [
  {
    path: NAVIGATION_ROUTES.AUTHENTICATION.BASE_PATH,
    loadChildren: () =>
      import('@authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
