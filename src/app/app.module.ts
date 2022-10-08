import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './modules/home/home.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { RootComponent } from './core/components/root/root.component';
import { ChatsComponent } from './modules/chats/chats.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3001', options: {} };

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    AuthenticationModule,
    HomeModule,
  ],
  declarations: [RootComponent, ChatsComponent],
  bootstrap: [RootComponent],
})
export class AppModule {}
