import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChatsService } from './services/chats.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [ChatsService],
  exports: [],
})
export class DataModule {}
