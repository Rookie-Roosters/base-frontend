import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable()
export class ChatsService {
  constructor(private socket: Socket) {
    this.socket.ioSocket.io.opts.query = { Authorization: `Some token` };
  }

  sendMessage(msg: string) {
    this.socket.emit('message', msg);
  }

  getMessage() {
    return this.socket.fromEvent('message');
  }
}
