import { Component, OnInit } from '@angular/core';
import { ChatsService } from 'src/app/data/services/chats.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.sass'],
})
export class ChatsComponent implements OnInit {
  message: string = '';

  constructor(private chatsService: ChatsService) {}

  ngOnInit(): void {
    this.chatsService.getMessage().subscribe((data) => {
      this.getMessage(data as string);
    });
  }

  getMessage(message: string) {
    this.message = message;
  }

  sendMessage() {
    this.chatsService.sendMessage('Hola mundo');
  }
}
