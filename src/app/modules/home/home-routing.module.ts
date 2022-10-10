import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', //NAVIGATION_ROUTES.AUTHENTICATION.BASE_PATH,
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
