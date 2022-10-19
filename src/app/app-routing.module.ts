import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@core/components';
import { NAVIGATION_ROUTES } from '@core/constants';
import { AuthGuard, NotAuthGuard } from '@core/guards/auth.guard';

const routes: Routes = [
  {
    path: NAVIGATION_ROUTES.AUTHENTICATION.BASE_PATH,
    canActivate: [NotAuthGuard],
    loadChildren: () => import('@authentication/authentication.module').then((m) => m.AuthenticationModule),
  },
  {
    path: NAVIGATION_ROUTES.DASHBOARD.BASE_PATH,
    canActivate: [AuthGuard],
    loadChildren: () => import('@dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: '404',
    canActivate: [AuthGuard],
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
