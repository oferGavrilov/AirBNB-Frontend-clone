import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { throwError } from 'rxjs';
import { lastValueFrom } from 'rxjs';
import { Order } from '../models/order.model';
import { User } from '../models/user.model';
import { HttpService } from './http.service';
import { OrderService } from './order.service';
import { SocketService } from './socket.service';
import { StayService } from './stay.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private httpService: HttpService,
    private stayService: StayService,
    private socketService: SocketService,
    public orderService: OrderService,
    public snackBar: MatSnackBar) {
  }

  private USER_URL = 'user/'
  private STORAGE_KEY_LOGGEDIN_USER = 'user'
  private AUTH_URL = 'auth/'
  hostFunction = this.updateHostMsg.bind(this)
  userFunction = this.updateUserMsg.bind(this)

  public getUser(): User {
    return JSON.parse(sessionStorage.getItem(this.STORAGE_KEY_LOGGEDIN_USER) as string)
  }

  public async login(credentials: User) {
    try {
      const loggedInUser = await lastValueFrom(this.httpService.post(this.AUTH_URL + 'login', credentials)) as User
      if (loggedInUser) {
        this.saveLocalUser(loggedInUser)
        this.socketService.login(loggedInUser._id)
        this.socketService.on(this.socketService.SOCKET_EMIT_ORDER_FOR_HOST, this.hostFunction)
        this.socketService.on(this.socketService.SOCKET_EMIT_ORDER_FOR_USER, this.userFunction)
      }
    } catch (err) {
      throw err
    }
  }

  public async signup(user: User) {
    try {
      user = await lastValueFrom(this.httpService.post(this.AUTH_URL + 'signup', user)) as User
      this.saveLocalUser(user)
    } catch (err) {
      throw err
    }
  }

  public getEmptyUser() {
    return {
      username: '',
      fullname: '',
      password: '',
      imgUrl: '',
      userMsg: 0,
      hostMsg: 0
    }
  }

  async updateHostMsg(order: Order) {
    const user = this.getUser()
    user.hostMsg++
    const updatedUser = await this.update(user) as User
    this.saveLocalUser(updatedUser)
    console.log(updatedUser)
    const msg = `${order.buyer.fullname} invite your place`
    this.snackBar.open(msg, 'Close', { duration: 3000 })
    this.orderService.loadOrders()
  }

  update(user: User) {
    try {
      if (!user) return
      return lastValueFrom(this.httpService.put(this.USER_URL, user))
    } catch (err) {
      throw err
    }
  }

  async updateUserMsg(order: Order) {
    const user = this.getUser()
    user.userMsg++
    const updatedUser = await this.update(user) as User
    this.saveLocalUser(updatedUser)
    console.log(updatedUser)
    const msg = `${order.stay.name} update your vacation status`
    this.snackBar.open(msg, 'Close', { duration: 3000 })
    this.orderService.loadOrders()
  }

  public async logout() {
    try {
      const msg = await lastValueFrom(this.httpService.post(this.AUTH_URL + 'logout'))
      sessionStorage.clear()
      this.socketService.logout()
      this.stayService.loadStays()
    } catch (err) {
      console.log('err:', err)
    }
  }

  private saveLocalUser(user: User) {
    sessionStorage.setItem(this.STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
  }
}

