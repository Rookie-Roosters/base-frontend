import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataModule } from './data/data.module';
import {
  LogInPageComponent,
  SignUpPageComponent,
} from './modules/authentication/pages';
import { ChatsComponent } from './modules/chats/chats.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LogInPageComponent },
  { path: 'signup', component: SignUpPageComponent },
  {path: 'chats', component: ChatsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DataModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
