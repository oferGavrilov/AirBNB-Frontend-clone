import { Injectable, isDevMode } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket: any
  readonly uri: string = isDevMode() ? '//localhost:3030' : ''

  constructor() {
    this.socket = io(this.uri)
  }
  private SOCKET_EMIT_LOGIN = 'set-user-socket'
  private SOCKET_EMIT_LOGOUT = 'unset-user-socket'
  public SOCKET_EVENT_ORDER_FOR_HOST = 'order-coming-event'
  public SOCKET_EVENT_ORDER_FOR_USER = 'order-update-event'
  public SOCKET_EMIT_ORDER_FOR_HOST = 'order-coming-emit'
  public SOCKET_EMIT_ORDER_FOR_USER = 'order-update-emit'

  emit(eventName:string , data:any) {
    this.socket.emit(eventName, data)
  }

  on(eventName: string, cb: Function) {
    this.socket.on(eventName, cb)
  }

  off(eventName: string, cb: Function | null  = null) {
    if (!this.socket) return;
    if (!cb) this.socket.removeAllListeners(eventName)
    else this.socket.removeListener(eventName, cb)
  }

  login(userId: string) {
    this.socket.emit(this.SOCKET_EMIT_LOGIN, userId)
  }

  logout() {
    this.socket.emit(this.SOCKET_EMIT_LOGOUT)
  }
}
