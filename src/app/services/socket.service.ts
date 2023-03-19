import { Injectable, isDevMode } from '@angular/core';
import { io } from "socket.io-client";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket: any
  readonly uri: string = "ws://localhost:3030"

  constructor() {
    this.socket = io(this.uri)
  }
  baseUrl: string = isDevMode() ? '//localhost:4200' : ''
  private SOCKET_EMIT_LOGIN = 'set-user-socket'
  private SOCKET_EMIT_LOGOUT = 'unset-user-socket'
  public SOCKET_EVENT_ORDER_FOR_HOST = 'order-coming'
  public SOCKET_EVENT_ORDER_FOR_USER = 'order-update'
  ioSocket: any;

  
  listen(eventName:string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data:any) => {
        subscriber.next(data);
      })
    })
  }

  emit(eventName:string , data:any) {
    this.socket.emit(eventName, data)
  }


  // on(eventName: string, cb: Function) {
  //   this.socket.on(eventName, cb)
  // }

  // off(eventName: string, cb = null) {
  //   if (!this.socket) return;
  //   if (!cb) this.socket.removeAllListeners(eventName)
  //   else this.socket.removeListener(eventName, cb)
  // }

  // emit(eventName: string, data: any) {
  //   this.socket.emit(eventName, data)
  // }

  // login(userId: string) {
  //   this.socket.emit(this.SOCKET_EMIT_LOGIN, userId)
  // }
  // logout() {
  //   this.socket.emit(this.SOCKET_EMIT_LOGOUT)
  // }

}


